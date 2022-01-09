import React, {Component} from 'react';
import axios from 'axios';
class AppClass extends Component {

    constructor(){
      super();

      this.state={
          nama:'',
          umur:'',
          hoby:''
      }
    }

    changeHandle= e =>{
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    submitHandel= e=>{
      e.preventDefault()
      // console.log(this.state)
      this.setState({
        hoby:`${this.state.nama} dan ${this.state.umur}`
      })
      console.log(this.state) //tidak akan muncul karena data ini dieksekusi setelah data sebelumnya dikirim
      // memeberishkan from setealh inputed
      this.state.nama=''
      this.state.umur=''
      
    }

    render() {
      return (
        <div className='p-5'>
           <div className='container'>
             <div className='row'>
               <div className='col-md-6'>
                 <div className='card'>
                   <div className='card-header'>from Handling</div>
                   <div className='card-body'>
                     <form onSubmit={this.submitHandel}>
                       <div className='mb-4'>
                            <label htmlFor='nama' className='form-label'>nama</label>
                            <input type='text' 
                                   id='nama' 
                                   name='nama'
                                   className='form-control'
                                   defaultValue={this.state.nama}
                                   onChange={this.changeHandle} />
                       </div>
                       <div className='mb-4'>
                            <label htmlFor='umur' className='form-label'>umur</label>
                            <input type='text' 
                                   id='umur' 
                                   name='umur'
                                   className='form-control'
                                   defaultValue={this.state.umur}
                                   onChange={this.changeHandle} />
                       </div>
                       <div className='mb-4'>
                            <label htmlFor='hoby' className='form-label'>hoby</label>
                            <input type='text' 
                                   id='hoby' 
                                   name='hoby'
                                   defaultValue={this.state.hoby}
                                   className='form-control' />
                       </div>
                       <button type='submit' className='btn btn-primary btn-block'>submit</button>
                     </form>
                   </div>
                 </div>
               </div>
             </div>
           </div>
        </div>
      )
    }
}

export default AppClass;