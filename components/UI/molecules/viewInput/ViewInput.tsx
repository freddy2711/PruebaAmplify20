import Input from '../../atoms/input/Input'
import Label from '../../atoms/label/Label'
import styles from './ViewInput.module.scss'

export interface Props{
    texLabel:string
    typeInput: string
    nameInput:string
    idInput:string
    Onchange?:Function
    disabled?:any
    placeholder?:string
    defaultValue?:string
    min?:any
    max?:any
    value?:any
    readOnly?:any
    onClick?:any
    index?:any
}


const ViewInput = ({texLabel = '',typeInput='',nameInput='',idInput='',Onchange,disabled,placeholder,defaultValue,min,max,value,readOnly,onClick,index}:Props) => {
    const response = typeInput === "date" ? value === undefined ? new Date() :value : value
    return(
        <div className={styles.viewInputConten}>
             <Label>
                {texLabel}
            </Label>
            {
                index === 1 ?
                <Input max={max} min={min} classname={styles.FormatedText} type={typeInput} name={nameInput} id={idInput} onchange={Onchange} disabled={disabled} placeholder={placeholder} defaultValue={defaultValue} value={response} readOnly={readOnly} onClick={onClick}/>
                :
                index === 2 ?
                <Input max={max} min={min} classname={styles.FormatedText} type={typeInput} name={nameInput} id={idInput} onchange={Onchange} disabled={disabled} placeholder={placeholder} readOnly={readOnly} onClick={onClick}/>
                : 
                index === 3 ?
                <input style={{border:'3px solid #E9ECEF'}} className={styles.FormatedText} type="date" name="" id="" value={value} onClick={onClick} readOnly />
                : 
                <Input max={max} min={min} classname={styles.FormatedText} type={typeInput} name={nameInput} id={idInput} onchange={Onchange} disabled={disabled} placeholder={placeholder} defaultValue={defaultValue} value={value} readOnly={readOnly} onClick={onClick}/>
            }

            
       </div>
       
    )
}

export default ViewInput