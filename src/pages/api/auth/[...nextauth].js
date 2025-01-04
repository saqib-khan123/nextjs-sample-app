import NextAuth from "next-auth";
import GithubProvider from 'next-auth/providers/github'

const authOptions = () =>{
    providers: [{
        clientId: 'Ov23lixpGsryKMDZQKwf',
        clientSecret: 'cdace0119bc7b53604468df3ea83b3562b6de687'
    }]
}
export default NextAuth(authOptions)