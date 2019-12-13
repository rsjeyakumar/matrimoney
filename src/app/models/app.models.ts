export interface USER {
    userId: string;
    userName: string;
    statusCode: number;
    message: number;
    status: string;
}
export interface LOGINREQUEST {
    phoneNumber: string;
    password: string;
}

export interface LOGINRESPONSE {
    matrimonyId: number;
    userName: string;
    status: string;
    message: string;
    statusCode: number;

}

export interface PROFILEDASBOARDRESPONSE {
    message: string;
    statusCode: number;
    profiles: PROFILE[];
}

export interface PROFILE {
    name: string;
    matrimonyId: string;
    age: string;
    place: string;
    educationDetail: string;
    imageUrl: string;
}

export interface REGISTERREQUEST {
    name: string;
    age: string;
    gender: string;
    maritialStatus: string;
    emailAddress: string;
    dob: string;
    phoneNumber: string;
    password: string;
    city: string;
    educationDetail: string;
    annualIncome: number;
    aboutMe: string;
    imageUrl: string;
}

export interface REGISTERRESPONSE {
    message: string;
    statusCode: number;
    matrimonyId: string;
}


export interface PROFILEDETAILRESPONSE {

    message: string;
    statusCode: number;
    userProfile: PROFILEDETAILS[];

}

export interface PROFILEDETAILS {
    name: string;
    maritialStatus: string;
    dob: string;
    age: string;
    place: string;
    educationDetail: string;
    occupationDetail: string;
    annualIncome: number;
    aboutMe: string;
    imageUrl: string;

}

export interface SHOWINTRESTREQUEST {
    interestMatrimonyId: number;
}

export interface SHOWINTRESTRESPONSE {
    message: string;
    statusCode: number;
}

export interface INTRESTEDPROFILERES {
    message: string;
    statusCode: number;
    interestedProfiles: PROFILE[];
}

