/* eslint-disable react/prop-types */
export function Appbar(){
    return(
        <div className="h-14 flex shadow justify-between">
            <div className="flex flex-col justify-center h-full ml-4">
               PayTM App
            </div>
           <div className="flex">
                <div className="flex flex-col justify-center h-full r-4">
                 Hello
                </div>
                <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    U
                </div>
            </div>
           </div>
        </div>
    )
}