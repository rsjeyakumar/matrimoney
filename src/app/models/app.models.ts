export interface USER {
    userId: string;
    userName: string;
    statusCode: number;
    message: number;
}

export interface HOSPITALS {
    status: string;
    statusCode: number;
    message: string;
    hospitals: HOSPITALLIST[];
}
export interface HOSPITALLIST {
    id: string;
    name: number;
    place: string;
}

export interface POLICY {
    statusCode: number;
    message: string;
    policyNo: string;
    policyHolderName: string;
    policyDependentName: string;
    claimDate: string;
    claimAmount: string;
    policyAmount: number;
    policyStatus: POLICYSTATUS[];
}
export interface POLICYSTATUS {
    id: number;
    policystatus: string;
}

export interface APPROVALREQUEST {
    approval: string;
    approvalId: number;
    comments: string;
}

export interface RESPONSE {
    message: string;
    statusCode: number;
    status: string;
}


export interface RAISECLAIM {
    admissionDate: string;
    ailmentDetail: string;
    claimAmount: number;
    diagosis: string;
    dischargeDate: string;
    dischargeDetail: string;
    hospitalId: number;
    name: string;
    policyNo: string;
}

export interface CLAIMLIST {
    id: string;
    name: number;
    claimNumber: string;
    claimDate: string;
    claimAmount: string;
}
