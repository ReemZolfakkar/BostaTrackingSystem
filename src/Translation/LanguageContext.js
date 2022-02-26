import React,{Component, createContext} from 'react'
import ar from './ar.json'

export const LanguageContext=createContext();
class LanguageContextProvider extends Component{
    state={
        userLang:ar
    }
    render(){
        return(
            <LanguageContext.Provider value={{...this.state}}>
                    {this.props.children}
            </LanguageContext.Provider>
        );
    }
}
export default LanguageContextProvider