# How to Auth and Protected Routes

1. After create de route that you want to protect
2. Implementd the functionallity to login and logout the user
   1. Using createContext, you wrap login and logout into
   2. return a Provider rendering the children as prop
   3. create a useAuth that return useContext with AuthContext as paramenter.
3. Implement the login Page
   1. use the AuthContext do define value
   2. use the useNavigate to redirect
4. Create a RequireAuth component that going to check if user is logged in or not
5. Wrap the initial route (1) with RequireAuth component to validate that
