# *Directives* in Angular 


## This example dives deeper into how to use *http service* in Angular, this example relies on google [firebase](https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwi5i8OMpuTZAhVOk-0KHfmlAccYABAAGgJkZw&ohost=www.google.be&cid=CAESEeD2K4s_hNdCJVHabfC2mFy3&sig=AOD64_2wVmRVC4iMunTEcQNj8PI_DMSBeA&q=&ved=0ahUKEwiWgr6MpuTZAhXDyqQKHWPpAE8Q0QwIJw&adurl=) 'db' & API as a backend

> Angular is a SPA (single page application), i.e. we should prevent a submit/leave the page, otherwise all the data get destroyed!:
> > * Through the custom services, Angular uses the built-in 'http' service to fetch the data, this should be injected into the custom service, all of this is done async through observables.

> > * Hence, the need to subscribe!

> > * The map method (provided by 'rxj/RX' package) however, allows data transformation, and it wraps data in a new observable (created by the 'map' method ) which we must subscribe to in order to get the data; this allows us to centralize data transformation in one place (within the custom services)


> *Note* :  a further explanation is provided within the code for each case. 


- - -


## Usage:

1. `npm install`
2. `ng serve`


- - -

* * *

##### *You may also need to run the following (i.e bootstrap package has been removed from angular newer versions!):*

`npm install bootstrap@3.3.7`

