export class SubmittedForm {
    _id ?: string;
    userId: string;
    formId: string;
    formValue: Object;
    evidences: Array<Object>;
    status: string;
    approverId ?: string;
    approvedDate ?: Date;
}