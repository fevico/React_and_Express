import {FC,} from 'react'
import AppButton from './AppButton'

interface Props{
    title?:string 
}

const NoteItem: FC<Props> = ({title}) => {
    return <div className="bg-white shadow-md rounded p-5">
    <p className="font-semibold text-gray-700 text-lg mb-4">{title}</p>
    <div className="space-x-4">
        <AppButton title='View' type='regular' onClick={()=>{
            console.log('viewing note');
        }}/>
        <AppButton title='Edit' type='normal'/>
        <AppButton title='Delete' type='danger'/>
    </div>
    </div>
    
    
}

export default NoteItem