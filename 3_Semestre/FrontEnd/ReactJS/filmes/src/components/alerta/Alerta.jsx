import Swal from "sweetalert2"
import "./Alerta.css";

export const Alerta = ({ 
     title,
     text, 
     icon, 
     showCancelButton = null,
     confirmButtonText = null,
     cancelButtonText = null ,
     confirmButtonColor = "#3085d6",
     cancelButtonColor= "#d33"
    }) => {
    return Swal.fire({

     title,
     text: text,
     icon: icon,
     showCancelButton: showCancelButton != null ? showCancelButton: undefined,
     confirmButtonText: confirmButtonText != null ? confirmButtonText: undefined,
     cancelButtonText: cancelButtonText != null ? cancelButtonText: undefined,
     confirmButtonColor,
     cancelButtonColor,
  
   

        
    });
};

