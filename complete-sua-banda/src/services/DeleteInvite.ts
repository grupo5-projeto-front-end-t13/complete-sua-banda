import { api } from "./ApiRequest";


export const DeclineAnInvitationBands = async (id: number | undefined,setUpdateNotification:React.Dispatch<React.SetStateAction<boolean>>) => {
     setUpdateNotification((prev) => (!prev))
     await api.delete(`/bands_invites/${id}` );
};

export const DeclineAnInvitationMusician = async (id: number | undefined,setUpdateNotification:React.Dispatch<React.SetStateAction<boolean>>) => {
     setUpdateNotification((prev) => (!prev))
     await api.delete(`/members_invites/${id}` );
};
