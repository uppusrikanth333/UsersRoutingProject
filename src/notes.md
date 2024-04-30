useEffect for side effect features or functionality or logic.

useEffect(()=>{})---> for every render this callback function will be called. ( mounting , updating)

useEffect(()=>{},[])---> the callback function will be called only once in the mounting(first render)

useEffect(()=>{},[dependency])--> this callback function will render initial.
whenever there are changes in the dependency the callback function will be called again.

---

in some scenarious after unmounting happen(component is removed from the dom), the logic present inside the component will continously run which results in unnecessary load on system.

in-order to solve this issue,
we need to use clean up function in useEffect.

useEffect(()=>{

    return function(){
        //setTimeout--->clearTimeout
        //clearInterval.
        //document.element.
        //subscription.
    }

})
