import Label from '../../atoms/label/Label'
import Select from '../../atoms/select/Select'
import styles from './ViewList.module.scss'

export interface Props{
    texLabel:string
    optionSelect:string[]
    onChange?: Function
    index?:number
    defaultValue?:any
    value?:any
    onClick?:any
    consult?:any
}

const ViewList = ({texLabel = '',optionSelect = [],onChange,index=1,defaultValue,value,onClick,consult=1}:Props) => {
    
    const response = value === undefined ? "0" : value


    const convertTimeto24 = (time:any) => {
        const response = time.split('.')
        if(time !== ""){
            if(parseInt(response[0]) >= 12)
                return `${response[0]}:${response[1]} PM`
            else
                return `${response[0]}:${response[1]} AM`
        }
        return ""
    }

    return(
        <div className={styles.viewListConten}>
            <Label>
                {texLabel}
            </Label>
            {
                consult === 1 ? (
                    <Select defaultValue={defaultValue} classname={styles.FormatedText} id={''} onChange={onChange} onClick={onClick}>
                    {
                        index === 1 ? (
                            <option key="0">-- Seleccione --</option>
                        ): null
                    }
                    
                    {                 
                        optionSelect.map((x,y) => (
                            <option key={y}>{convertTimeto24(x)}</option>
                        ))
                    }
                    </Select>
                ) :  
                consult === 2 ?
                (
                    <Select defaultValue={defaultValue} classname={styles.FormatedText} id={''} onChange={onChange} onClick={onClick}>
                    {
                        index === 1 ? (
                            <option key="0">-- Seleccione --</option>
                        ): null
                    }
                    
                    {                 
                        optionSelect.map((x,y) => (
                            <option key={y}>{x}</option>
                        ))
                    }
                    </Select>
                ) :
                
                <Select defaultValue={defaultValue} classname={styles.FormatedText} id={''} onChange={onChange} value={response} onClick={onClick}>
                {
                    index === 1 ? (
                        <option key="0">-- Seleccione --</option>
                    ): null
                }
                
                {                 
                    optionSelect.map((x,y) => (
                        <option value={x === undefined ? "0":x} key={y}>{convertTimeto24(x)}</option>
                    ))
                }
                </Select>
            }
          
        </div>
    )
}

export default ViewList