import { toast } from 'react-toastify';

export const redirecting = (link,text) => {
  toast.info(text,{ position: toast.POSITION.TOP_LEFT})
  setTimeout(()=>{
    window.open(link)
   }, 2200);
}

// export const redirecting = (link,text) => {
//   toast.info(text,{ position: toast.POSITION.TOP_LEFT})
//   setTimeout(()=>{
//     window.open(link, '_blank')
//    }, 2200);
// }


