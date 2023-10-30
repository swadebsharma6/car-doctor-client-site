import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';

import { useContext } from 'react';
import { CiFacebook } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../Providers/AuthProvider';


const Register = () => {

  const {createUser} = useContext(AuthContext);

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email, password);
        // create user
        createUser(email, password)
        .then(result => {
          const user = result.user;
          console.log('created user', user);

        })
        .catch(error => {
          console.log(error.message);
        })
      }

    return (
        <section className="mb-20">
        <div className="hero min-h-screen bg-base-200 rounded-xl">
        <div className="hero-content flex-col lg:flex-row">
          <div className="mr-16 w-1/2">
            <img src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
               <h1 className="text-3xl text-center font-bold text-orange-600 py-6">Register now</h1>
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type='submit' className="btn btn-primary">Register</button>
              </div>

            
            </form>
            <h5 className='text-center font-bold mb-4'>Or Sign In with</h5>
            <div className='text-center'>
              
              <button className="btn mr-6">
             <FcGoogle></FcGoogle>
              Google
            </button>
              <button className="btn">
             <CiFacebook></CiFacebook>
              Facebook
            </button>
            </div>
            <p className='font-bold text-center my-4'>Already Have an Account ? please <Link to='/login' className='text-xl font-bold text-primary'>Login</Link></p>
          </div>
        </div>
      </div>
        </section>
    );
};

export default Register;