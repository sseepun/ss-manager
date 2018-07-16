import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ipHost, testing } from '../globals';

import { JsonResponse } from '../schemas/json-response';

@Injectable()
export class FileuploadService {

  private apiUrl = ipHost + '/fileupload';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  deleteUserProfile(userId) {
    let url = this.apiUrl + '/deleteuserprofile',
        input = { userId: userId };
    return this.http.post(url, JSON.stringify({ 'input': input }), { headers: this.headers })
      .toPromise()
      .then(response => {
        const result = response.json();
        if (testing) console.log(result.message);
        return result;
      })
      .catch(err => null);
  }
  uploadUserProfile(userId, profileData) {
    const url = this.apiUrl + '/uploaduserprofile?userId=' + userId;
    return this.http.post(url, profileData)
      .toPromise()
      .then(response => {
        const result = response.json();
        if (testing) console.log(result.message);
        return result;
      })
      .catch(err => null);
  }

  uploadMainForm(formFile) {
    const url = this.apiUrl + '/uploadmainform'
    return this.http.post(url, formFile)
      .toPromise()
      .then(response => {
        const result = response.json();
        if (testing) console.log(result.message);
        return result;
      })
      .catch(err => null);
  }
  uploadMainFormPreview(formPreviewFile) {
    let url = this.apiUrl + '/uploadmainformpreview'
    return this.http.post(url, formPreviewFile)
      .toPromise()
      .then(response => {
        const result = response.json();
        if (testing) console.log(result.message);
        return result;
      })
      .catch(err => null);
  }
  removeMainFormPreview(previewPath: String): Promise<JsonResponse> {
    let url = this.apiUrl + '/removemainformpreview',
        input = { previewPath: previewPath };
    return this.http.post(url, JSON.stringify({ 'input': input }), { headers: this.headers })
      .toPromise()
      .then(response => {
        const result = response.json();
        if (testing) console.log(result.message);
        return result as JsonResponse;
      })
      .catch(err=>{return {status: false, message: err, data: null} as JsonResponse});
  }

  uploadFormEvidences(evidenceForm, evidenceNumber) {
    const url = this.apiUrl + '/uploadformevidences/?en=' + evidenceNumber;
    return this.http.post(url, evidenceForm)
      .toPromise()
      .then(response => {
        const result = response.json();
        if (testing) console.log(result.message);
        return result;
      })
      .catch(err => null);
  }
  removeFormEvidences(evidences) {
    let url = this.apiUrl + '/removeformevidences',
        input = { evidences: evidences };
    return this.http.post(url, JSON.stringify({ 'input': input }), { headers: this.headers })
      .toPromise()
      .then(response => {
        const result = response.json();
        if (testing) console.log(result.message);
        return result;
      })
      .catch(err => null);
  }

}
