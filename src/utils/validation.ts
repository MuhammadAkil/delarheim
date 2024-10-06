export interface SellCarFormData {
    make: string;
    vinNumber: string;
    model: string;
    body: string;
    year: string;
    transmission: string;
    mileage: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    zip: string;
    carPhotos: File | null;
}

export interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

type ValidationErrors = { [key: string]: string };

// Utility function for validating non-empty strings
const isNonEmpty = (value: string): boolean => !!value.trim();

// Email regex pattern for validation
const emailRegex = /\S+@\S+\.\S+/;

export const validateSellCarForm = (formData: SellCarFormData): ValidationErrors => {
    const errors: ValidationErrors = {};

    // Vehicle Information Validation
    if (!isNonEmpty(formData.make)) errors.make = 'Make is required';
    if (!isNonEmpty(formData.vinNumber)) errors.vinNumber = 'vinNumber number is required';
    if (!isNonEmpty(formData.model)) errors.model = 'Model is required';
    if (!isNonEmpty(formData.body)) errors.body = 'Body type is required';
    if (!isNonEmpty(formData.year)) {
        errors.year = 'Year is required';
    } else if (isNaN(Number(formData.year)) || Number(formData.year) > new Date().getFullYear()) {
        errors.year = 'Please enter a valid year';
    }
    if (!isNonEmpty(formData.transmission)) errors.transmission = 'Transmission is required';
    if (!isNonEmpty(formData.mileage)) errors.mileage = 'Mileage is required';
    if (!formData.carPhotos) errors.carPhotos = 'Please upload car photos';

    // Contact Information Validation
    if (!isNonEmpty(formData.name)) errors.name = 'Name is required';
    if (!isNonEmpty(formData.email)) {
        errors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
        errors.email = 'Invalid email address';
    }
    if (!isNonEmpty(formData.phone)) errors.phone = 'Phone number is required';
    if (!isNonEmpty(formData.address)) errors.address = 'Address is required';
    if (!isNonEmpty(formData.city)) errors.city = 'City is required';
    if (!isNonEmpty(formData.zip)) errors.zip = 'ZIP code is required';

    return errors;
};

export const validateContactForm = (formData: ContactFormData): ValidationErrors => {
    const errors: ValidationErrors = {};

    // Contact Form Validation
    if (!isNonEmpty(formData.name)) errors.name = 'Name is required';
    if (!isNonEmpty(formData.email)) {
        errors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
        errors.email = 'Invalid email address';
    }
    if (!isNonEmpty(formData.message)) errors.message = 'Message is required';

    return errors;
};
