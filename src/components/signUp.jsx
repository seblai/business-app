import {useFormik} from "formik"
function SignUp(){
    return(
        <div>
            <form class="row g-3">
              <h1>Sign Up</h1>
  <div class="col-md-6">
    
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4" />
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4" />
  </div>
  </form>
        </div>
    )
}
export default SignUp