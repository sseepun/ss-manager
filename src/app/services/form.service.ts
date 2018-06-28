import { Injectable, EventEmitter, Output } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ipHost, testing } from '../globals';

import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

import { JsonResponse } from '../schemas/json-response';
import { User } from '../schemas/user';
import { SSForm } from '../schemas/ss-form';
import { SubmittedForm } from '../schemas/submitted-form';
import { FormCategory } from '../schemas/form-category';

import { SocketioService } from './socketio.service';

@Injectable()
export class FormService {

  private apiUrl = ipHost + '/form';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  private subjectForms = new Subject<any>();
  private subjectSubmittedForms = new Subject<any>();
  private subjectPendingFormNumber = new Subject<any>();

  private subjectAdminForms = new Subject<any>();
  private subjectAdminSubmittedForms = new Subject<any>();
  private subjectAdminGovForms = new Subject<any>();

  private mode = 'New'; // New, Edit, View, ByPass (Admin)
  private role = 'User'; // User, Admin  
  private submittedForm: SubmittedForm = null;
  private form: SSForm = null;
  private criteria = null;

  @Output() formSubmitted: EventEmitter<any> = new EventEmitter();

  constructor(
    private http: Http,
    private _socketio: SocketioService
  ) { }

  setMode(mode='New', role='User', submittedForm:SubmittedForm=null, form:SSForm=null, criteria=null): void {
    if (submittedForm===null) {
      this.mode = 'New'; this.role = 'User'; this.submittedForm = null;
      this.form = null; this.criteria = null;
    } else if (role==='User') {
      this.mode = mode; this.role = 'User'; this.submittedForm = submittedForm;
      this.form = null; this.criteria = null;
    } else {
      this.mode = mode; this.role = role; this.submittedForm = submittedForm;
      this.form = form; this.criteria = criteria;
    }
  }
  get getMode() {return this.mode}
  get getRole() {return this.role}
  get getSubmittedForm(): SubmittedForm {return this.submittedForm}  
  get getForm(): SSForm {return this.form}
  get getCriteria() {return this.criteria}

  getFormCategory(): Promise<JsonResponse> {
    let url = this.apiUrl + '/getformcategory';
    return this.http.get(url).toPromise()
      .then(response =>{
        let result = response.json();
        if (testing) console.log(result.message);
        return result as JsonResponse;
      })
      .catch(err=>{return {status: false, message: err, data: null} as JsonResponse});
  }

  getActiveForms(criteria): Promise<void> {
    let search = criteria.search;
    if (search==='') search = 'EmptyNone';
    let url = this.apiUrl + '/getactiveforms/' + criteria.category + '/'
      + criteria.start + '/' + criteria.limit + '/' + criteria.sort + '/' + search;
      
    return this.http.get(url).toPromise()
      .then(response=> {
        let result = response.json();
        if (testing) console.log(result.message);
        this.subjectForms.next(result as JsonResponse);
      })
      .catch(err => {
        this.subjectForms.next({status: false, message: err, data: null} as JsonResponse);
      });
  }
  getFormDetail(accessCode: string): Promise<JsonResponse> {
    const url = this.apiUrl + '/getformdetail/' + accessCode;

    return this.http.get(url).toPromise()
      .then(response=> {
        const result = response.json();
        if (testing) console.log(result.message);
        return result as JsonResponse;
      })
      .catch(err=>{return {status: false, message: err, data: null} as JsonResponse});
  }

  getSubmittedForms(userId: string, criteria): Promise<void> {
    const url = this.apiUrl + '/getsubmittedforms/' + userId + '/'
      + criteria.start + '/' + criteria.limit + '/' + criteria.sort;
    return this.http.get(url).toPromise()
      .then(response=> {
        const result = response.json();
        if (testing) console.log(result.message);
        this.subjectSubmittedForms.next(result as JsonResponse);
      })
      .catch(err=> {
        this.subjectSubmittedForms.next({status: false, message: err, data: null} as JsonResponse);
      });
  }
  submitForm(userId: string, formId: string, formValue: Object, evidences:Array<Object>=null): Promise<JsonResponse> {
    let url = this.apiUrl + '/submitform',
        input = {userId: userId, formId: formId, formValue: formValue};
    if (evidences!==null) input['evidences'] = evidences;

    return this.http.post(url, JSON.stringify(input), { headers: this.headers })
      .toPromise()
      .then(response=> {
        const result = response.json();
        if (testing) console.log(result.message);
        if (result.status) this._socketio.userFormSubmitted(result.data);
        return result as JsonResponse;
      })
      .catch(err=>{return {status: false, message: err, data: null} as JsonResponse});
  }
  deleteSubmittedForm(userId: string, form: SubmittedForm): Promise<JsonResponse> {
    const url = this.apiUrl + '/deletesubmittedform',
          input = {userId: userId, formId: form._id};
    if (form.evidences!==undefined) input['evidences'] = form.evidences;

    return this.http.post(url, JSON.stringify(input), { headers: this.headers })
      .toPromise()
      .then(response=> {
        const result = response.json();
        if (testing) console.log(result.message);
        if (result.status) this._socketio.userFormDeleted(form);
        return result as JsonResponse;
      })
      .catch(err=>{return {status: false, message: err, data: null} as JsonResponse});
  }
  editSubmittedForm(formId:string, formValue:Object, evidences:Array<Object>=null): Promise<JsonResponse> {
    const url = this.apiUrl + '/editsubmittedform',
          input = {formId: formId, formValue: formValue};
    if (evidences!==null) input['evidences'] = evidences;

    return this.http.post(url, JSON.stringify(input), { headers: this.headers })
      .toPromise()
      .then(response=> {
        const result = response.json();
        if (testing) console.log(result.message);
        return result as JsonResponse;
      })
      .catch(err=>{return {status: false, message: err, data: null} as JsonResponse});
  }

  getPendingFormNumber(): Promise<void> {
    const url = this.apiUrl + '/pendingformnumber';
    return this.http.get(url).toPromise()
      .then(response=> {
        const result = response.json();
        if (testing) console.log(result.message);
        this.subjectPendingFormNumber.next(result as JsonResponse);
      })
      .catch(err=> {
        this.subjectPendingFormNumber.next({status: false, message: err, data: null} as JsonResponse);
      });
  }

  adminGetActiveForms(criteria): Promise<void> {
    let search = criteria.search;
    if (search==='') search = 'EmptyNone';
    const url = this.apiUrl + '/admingetactiveforms/' + criteria.category + '/'
      + criteria.start + '/' + criteria.limit + '/' + criteria.sort + '/' + search;

    return this.http.get(url).toPromise()
      .then(response=> {
        const result = response.json();
        if (testing) console.log(result.message);
        this.subjectAdminForms.next(result as JsonResponse);
      })
      .catch(err=> {
        this.subjectAdminForms.next({status: false, message: err, data: null} as JsonResponse);
      });
  }
  adminGetForms(criteria): Promise<void> {
    let search = criteria.search;
    if (search==='') search = 'EmptyNone';
    const url = this.apiUrl + '/admingetforms/' + criteria.start + '/' + criteria.limit + '/'
      + criteria.sort + '/' + search;
      
    return this.http.get(url).toPromise()
      .then(response=> {
        const result = response.json();
        if (testing) console.log(result.message);
        this.subjectAdminGovForms.next(result as JsonResponse);
      })
      .catch(err=> {
        this.subjectAdminGovForms.next({status: false, message: err, data: null} as JsonResponse);
      });
  }
  adminGetSubmittedForms(form:SSForm, criteria) {
    let search = criteria.search;
    if (search==='') search = 'EmptyNone';
    const url = this.apiUrl + '/admingetsubmittedforms/' + form._id + '/'
      + criteria.start + '/' + criteria.limit + '/' + criteria.sort + '/' + search;

    return this.http.get(url).toPromise()
      .then(response => {
        const result = response.json();
        if (testing) console.log(result.message);
        this.subjectAdminSubmittedForms.next(result as JsonResponse);
      })
      .catch(err => {
        this.subjectAdminSubmittedForms.next({status: false, message: err, data: null} as JsonResponse);
      });
  }

  setSubmittedFormStatus(form:SubmittedForm, status:string, approver:User): Promise<JsonResponse> {
    let url = this.apiUrl + '/setsubmittedformstatus',
        input = {formId: form._id, status: status, approver: approver};
    return this.http.post(url, JSON.stringify(input), { headers: this.headers })
      .toPromise()
      .then(response => {
        const result = response.json();
        if (testing) console.log(result.message);
        if (result.status) this._socketio.submittedFormStatusChange(form);
        return result as JsonResponse;
      })
      .catch(err => {return {status: false, message: err, data: null} as JsonResponse});
  }
  setFormStatus(form:SSForm, status:string): Promise<JsonResponse> {
    const url = this.apiUrl + '/setformstatus',
        input = {formId: form._id, status: status};
    return this.http.post(url, JSON.stringify(input), { headers: this.headers })
      .toPromise()
      .then(response => {
        const result = response.json();
        if (testing) console.log(result.message);
        return result as JsonResponse;
      })
      .catch(err => {return {status: false, message: err, data: null} as JsonResponse});
  }

  createForm(form: SSForm): Promise<JsonResponse> {
    let url = this.apiUrl + '/createform',
        input = {form: form};
    return this.http.post(url, JSON.stringify(input), { headers: this.headers })
      .toPromise()
      .then(response => {
        const result = response.json();
        if (testing) console.log(result.message);
        return result as JsonResponse;
      })
      .catch(err => {return {status: false, message: err, data: null} as JsonResponse});
  }
  deleteForm(form: SSForm): Promise<JsonResponse> {
    let url = this.apiUrl + '/deleteform',
        input = {form: form};
    return this.http.post(url, JSON.stringify(input), { headers: this.headers })
      .toPromise()
      .then(response => {
        const result = response.json();
        if (testing) console.log(result.message);
        return result as JsonResponse;
      })
      .catch(err => {return {status: false, message: err, data: null} as JsonResponse});
  }
  editForm(form: SSForm): Promise<JsonResponse> {
    let url = this.apiUrl + '/editform',
        input = {form: form};
    return this.http.post(url, JSON.stringify(input), { headers: this.headers })
      .toPromise()
      .then(response => {
        const result = response.json();
        if (testing) console.log(result.message);
        return result as JsonResponse;
      })
      .catch(err => {return {status: false, message: err, data: null} as JsonResponse});
  }

  addFormCategory(formCategory: FormCategory): Promise<JsonResponse> {
    const url = this.apiUrl + '/addformcategory',
          input = {formCategory: formCategory};
    return this.http.post(url, JSON.stringify(input), { headers: this.headers })
      .toPromise()
      .then(response => {
        const result = response.json();
        if (testing) console.log(result.message);
        return result as JsonResponse;
      })
      .catch(err => {return {status: false, message: err, data: null} as JsonResponse});
  }
  deleteFormCategory(formCategory: FormCategory): Promise<JsonResponse> {
    const url = this.apiUrl + '/deleteformcategory',
          input = {formCategory: formCategory};
    return this.http.post(url, JSON.stringify(input), { headers: this.headers })
      .toPromise()
      .then(response => {
        const result = response.json();
        if (testing) console.log(result.message);
        return result as JsonResponse;
      })
      .catch(err => {return {status: false, message: err, data: null} as JsonResponse});
  }

  // Observable
  observeForms(): Observable<any> {return this.subjectForms.asObservable(); }
  observeSubmittedForms(): Observable<any> {return this.subjectSubmittedForms.asObservable(); }
  observePendingFormNumber(): Observable<any> {return this.subjectPendingFormNumber.asObservable(); }

  observeAdminForms(): Observable<any> {return this.subjectAdminForms.asObservable(); }
  observeAdminSubmittedForms(): Observable<any> {return this.subjectAdminSubmittedForms.asObservable(); }
  observeAdminGovForms(): Observable<any> {return this.subjectAdminGovForms.asObservable(); }
}
