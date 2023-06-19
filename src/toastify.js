import { toast } from 'react-toastify';

export const redirecting = (text,link) => {
    toast.info(text,{ position: toast.POSITION.TOP_LEFT})
  setTimeout(()=>{
    // eslint-disable-next-line 
    location.href=link;
   }, 2200);
}

// export const redirecting = (link,text) => {
//   toast.info(text,{ position: toast.POSITION.TOP_LEFT})
//   setTimeout(()=>{
//     window.open(link, '_blank')
//    }, 2200);
// }


