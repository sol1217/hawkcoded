import Swal, { SweetAlertIcon } from 'sweetalert2';

interface AlertProps {
    title: string;
    text: string;
    icon: SweetAlertIcon;
}

function showAlert ({title, text, icon}: AlertProps) {
    Swal.fire({
        title,
        text,
        icon
    })
}

export default showAlert;