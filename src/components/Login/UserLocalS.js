/* localStorage.removeItem('user');
localStorage.clear(); */

var UserProfile = (function() {
  
    var getUser = function() {
      return  window.localStorage.getItem("user");    
    };
  
    var setUser = function(name) {
      window.localStorage.setItem('user', 'chameleon');           
    };
  
    return {
      getUser: getUser,
      setUser: setUser
    }
  
  })();
  
  export default UserProfile;


/*import UserProfile from './UserProfile';

UserProfile.setName("Some Guy");


import UserProfile from './UserProfile';

UserProfile.getName();*/