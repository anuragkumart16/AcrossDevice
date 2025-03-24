import './css/btn.css'
export default function Btn({type,text,onclick}){
    let css = ''
    if (type === 'primary'){
        css = 'btn-primary'
    }else if(type === 'secondary'){
        css = 'btn-secondary'
    }else if(type === 'black'){
        css = 'btn-black'
    }else if(type === 'secondary-thin'){
        css = 'btn-secondary-thin'
    }
    return(
        <button onClick={onclick} className={css} >{text}</button>
    )
}