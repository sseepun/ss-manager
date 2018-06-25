export class SSForm {
    _id ?: string;
    category: Array<string>;
    nameTH: string;
    nameEN: string;
    pdfForm: string;
    requireEvidence: boolean;
    accessCode: string;
    status: string;    
    previewUrl ?: string;
    owner ?: string;
}