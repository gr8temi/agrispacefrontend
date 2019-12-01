import React, {useEffect,Suspense,lazy} from 'react';
import  'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import './App.css'
import Request from  './request'
import {connect} from 'react-redux'
import {fetchInfo} from './actions/infoActions' 
// import { element } from 'prop-types';
const Routing = lazy(()=>import('./Routes'))


function App(props) {
   const {fetchInfo, info} = props
  useEffect(()=>{
    fetchInfo(Request)
  },[fetchInfo]) 
  
  const data = info || [];
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routing />
  <h1>{ data.map(element=>{
    return (
    <h1>{element.name}</h1>
    )
   
 })}</h1>
    </Suspense>
  );
}
const mapStateToProps = store => ({
  info: store.information.info,
  fetching: store.information.fetching
});
const mapDispatchToProps = {
  fetchInfo
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
