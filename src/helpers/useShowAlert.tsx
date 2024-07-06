import Swal from 'sweetalert2';

interface AlertProps {
    title: string;
    text: string;
    icon: string;
}

function showAlert ({title, text, icon}: AlertProps) {
    Swal.fire({
        title,
        text,
        icon
    })
}

export default showAlert;