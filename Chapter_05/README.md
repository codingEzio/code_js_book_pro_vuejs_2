### Note
- In this chapter, we'll build *a bit more complicated* project.
- 

### Getting started
- Init
    - ```sudo vue create sportsstore --default && cd sportsstore```
- Packages :: *Installing*
    
    ```bash
    # You might be NOT able to run this command.
    #   there's an issue about this that is related to zsh iteself.
    
    npm install axios@0.18.0 \
        && npm install vue-router@3.0.1 \
        && npm install vuex@3.0.1 \
        && npm install vuelidate@0.7.4 \
        && npm install bootstrap@4.0.0 \
        && npm install font-awesome@4.7.0 \
        
        # And for this part,
        #   you might need to using `sudo` to run this
        
        && npm install --savedev json-server@0.12.1 \
        && npm install --savedev jsonwebtoken@8.1.1 \
        && npm install --savedev faker@4.1.0 \
        && clear \
        && echo "Nicely done!"
    ```
    
- Packages :: *Why them*
    - ```font-awesome``` : *A library of icons that Sportsstore will use*.
    - ```jsonwebtoken``` : *Generate auth tokens*.
    - ```json-server``` : *Provide an RESTful web service*.
    - ```vue-router``` : *URL routing*.
    - ```vuelidate``` : *Validate the data*.
    - ```axios``` : *Make HTTP requests*.
    - ```vuex``` : *Shared data store*.

----------

### References
- 