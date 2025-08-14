import React, { Component } from 'react';
import farmerImage from '../assets/FarmerImage.jpg';
import logo from '../assets/Logo.png';
import '../index.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phone: '',
      password: '',
      error:''
    };
  }
handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { phone, password } = this.state;

    try{
      const response = await fetch('https://yourbackend.com/login', {
        method: 'POST',
        credentials: 'include', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, password })
      });

      const data = await response.json();

      if (data.success) {
        window.location.href = '/dashboard';
      } else {
        this.setState({ error: 'Invalid phone or password' });
        setTimeout(() => {
        this.setState({ error: '' });
            }, 3000);
      }
    } catch (err) {
      console.error(err);
      this.setState({ error: 'Server error' });
      setTimeout(() => {
        this.setState({ error: '' });
      }, 3000);

    }
  };

  render() {
    const { phone, password, error } = this.state;
    return(
      <div className='relative h-screen w-screen'>
        <div
         className= 'absolute w-screen top-0 left-0  h-screen  bg-cover bg-center z-0 blur-sm scale-100'
          style={{ backgroundImage: `url(${farmerImage})` }}
        >
        </div>
       < div className="relative z-10 flex h-screen">
       <div className="w-1/2"></div>

        <div className=" w-1/2 flex flex-col items-center justify-center bg-green-900 rounded-l-3xl">
          <div className="text-white w-96">
        
            <div className="flex justify-center mb-4">
              <img src={logo} alt="YegnaFarm" className="h-20" />
            </div>
            <h2 className="text-2xl font-semibold font-sans text-center mb-6">
              Welcome to YegnaFarm
            </h2>
            <form onSubmit={this.handleSubmit}>
              <label className='block mb-1 text-sm text-white'>
                Phone no
              </label>
              <input
                type='tel'
                name='phone'
                className='w-full p-3 mb-4 rounded-full border-none text-black'
                placeholder='Enter your phone number'
                value={phone}
                onChange={this.handleChange}
              />

              <label className='block mb-1 text-sm text-white'>
                Password
              </label>
              <input
                type='password'
                name='password'
                className='w-full p-3 mb-2 rounded-full border-none text-black'
                placeholder='Password'
                value={password}
                onChange={this.handleChange}
              />

              <div className='mt-2 text-sm text-white w-full text-right'>
                Forget password?{" "}
                <a href="#" className="underline text-white">
                  Click here
                </a>
              </div>
              {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
            <div className='flex justify-center'>
              <button
                type='submit'
                className=" border w-1/2 bg-white text-green-800 justify-center p-3 rounded-full py-1 font-bold hover:bg-gray-100 mt-4"
              >
                Login
              </button>
             </div>
              <div className='mt-4 text-sm text-white w-full text-center'>
                Don't have an account?{" "}
                <a href="#" className="underline text-white">
                  Sign up
                </a>
              </div>
            </form>
          </div>
        </div>
       </div>
      </div>
    )
  }
}

export default Login;
