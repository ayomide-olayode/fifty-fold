export type ServiceType = 'painting' | 'skimmming' | 'windows' | 'ceilings' | 'paint-sales' | 'other'

export interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    service: ServiceType;
    message: string;
    preferredContact:  'phone' | 'email' | 'whatsapp';
}