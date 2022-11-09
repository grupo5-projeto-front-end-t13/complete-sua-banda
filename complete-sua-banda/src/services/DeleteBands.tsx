import { api } from "./ApiRequest";

export const DeclineAnInvitationBands = async (id: number) => {
     await api.delete(`/bands_invites/${id}` );
};

export const DeclineAnInvitationMusician = async (id: number) => {
     await api.delete(`/members_invites/${id}` );
};