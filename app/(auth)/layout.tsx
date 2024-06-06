import { Logo} from "./_components/logo";


const AuthLayout =({
    children
}:{
    children: ReactNode
})=>{
    return (
        <div className="h-full flex-col items-center justify-center space-y-6">
        <Logo/>
      
        {children}
        
        </div>
    );
}

export default AuthLayout;