import React, { useState } from "react"



function Shan(){
    const [counter,useCount]=useState('')
    const [result,useResult]=useState('')

    const showCount = (value) => {

          
        if(value === '='){
          let result = eval(counter);
          useResult(result)

        }else {
            useCount(counter+value)
        }
    }

    const clearCount = () => {
        useCount('')
        useResult('')
    }


//   const eaquelCount = () => {
//     console.log("rascal")
//     useResult(result+2)
//     console.log('moonji'+counter+result)
// }


    return(
        <>
          <table id="calcu">

            <tr>
              <td ><input type="text" value={counter} /></td>
              <td ><input type="text" value={result} /></td>
              <td onClick={()=>{clearCount()}}><input type="button" value="C" /></td>
            </tr>
            <tr>
            <td onClick={()=>{showCount('1')}}><input type="button" value="1" /></td>
            <td onClick={()=>{showCount('2')}}><input type="button" value="2" /></td>
            <td onClick={()=>{showCount('3')}}><input type="button" value="3" /></td>
            <td onClick={()=>{showCount('/')}}><input type="button" value="/" /></td>
            </tr>
            <tr>
            <td onClick={()=>{showCount('4')}}><input type="button" value="4" /></td>
            <td onClick={()=>{showCount('5')}}><input type="button" value="5" /></td>
            <td onClick={()=>{showCount('6')}}><input type="button" value="6" /></td>
            <td onClick={()=>{showCount('*')}}><input type="button" value="*" /></td>
            </tr>
            <tr>
            <td onClick={()=>{showCount('7')}}><input type="button" value="7" /></td>
            <td onClick={()=>{showCount('8')}}><input type="button" value="8" /></td>
            <td onClick={()=>{showCount('9')}}><input type="button" value="9" /></td>
            <td onClick={()=>{showCount('-')}}><input type="button" value="-" /></td>
            </tr>
            <tr>
            <td ><input type="button" value="0" /></td>
            <td ><input type="button" value="." /></td>
            <td onClick={()=>{showCount('=')}}><input type="button" value="=" /></td>
            <td onClick={()=>{showCount('+')}}><input type="button" value="+" /></td>
            </tr>

          </table>
        </>
    )
}

export default Shan