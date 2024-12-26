export default function ButtonPrint ({handlePrint}) { 
    return (
        <div className="flex justify-center py-4">
            <button className="underline text-slate-600" onClick={() => handlePrint} >Imprimir Recibo</button>
        </div>
    )
}