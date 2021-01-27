import React,{Component} from 'react';
import {Tabs , Tab , Card , CardActions,CardMenu ,Button,CardTitle, CardText, IconButton, Grid, Cell} from 'react-mdl'

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = {activeTab : 0 };
    } 
    toggleCategories(){
        if (this.state.activeTab ===0){
            return (
                //django projects
                <div className = "new">
                <section className = "projects-grid" style={{width: '80%', margin: 'auto'}}>
                     <Grid className="demo-grid-1">
                     <Cell col={4}> <Card shadow = {5} style = {{minWidth: '450', margin :'auto'}}>
                   <CardTitle style = {{color:'red',height:'176px',background:
                   'url(data:image/jpeg;base64,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) center/ cover'}}>Django Project #1</CardTitle>
               <CardText>
                   This is my first project in django and it is a simple blog
               </CardText>
               <CardActions border>
                   <Button colered><a href = "https://github.com/sinajamshidi247/wblog-django">Github </a></Button>
                   <Button colered><a href = "https://sisilwblog.herokuapp.com/">Live Demo</a> </Button>

               </CardActions>
               <CardMenu style = {{color : '#fff'}}>
                  
               </CardMenu>
               </Card>
               </Cell>
               <Cell col={4}><Card shadow = {5} style = {{minWidth: '450', margin :'auto'}}>
               <CardTitle style = {{color:'red',height:'176px',background:
                   'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKJMxFpK_G_WOYiOns5XhPqYp-Coxq92ZKFQ&usqp=CAU) center/ cover'}}>Django Project #2</CardTitle>
               <CardText>
                  a site looklike stackoverflow that u can have profile , bio , follow another users,like or dislike and reply to posts
               </CardText>
               <CardActions border>
                   <Button colered><a href ="https://github.com/sinajamshidi247/social-django/">Github</a></Button>
                   {/* <Button colered>(still)</Button> */}

               </CardActions>
               <CardMenu style = {{color : '#fff'}}>
                   <IconButton name = "share" />
               </CardMenu>
               </Card>
               </Cell>

               <Cell col={4}> <Card shadow = {5} style = {{minWidth: '450', margin :'auto'}}>
               <CardTitle style = {{color:'red',height:'176px',background:
                   'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn-RhAx3ujWuwYZybmP8-N2lXodyLA9bIlMw&usqp=CAU) center/ cover'}}>Django Project #3</CardTitle>
               <CardText>
                   a web app that can generate passwords with several variables
               </CardText>
               <CardActions border>
                   <Button colered ><a href = "https://github.com/sinajamshidi247/password_generator">Github</a> </Button>
                   {/* <Button colered>Live Demo </Button> */}

               </CardActions>
               <CardMenu style = {{color : '#fff'}}>
                   <IconButton name = "share" />
               </CardMenu>
               </Card>
               </Cell>
               <Cell col={4}> <Card shadow = {5} style = {{minWidth: '450', margin :'auto'}}>
               <CardTitle style = {{color:'red',height:'176px',background:
                   'url(https://www.mongard.ir/media/course/top_image/django-cbv.jpg) center/ cover'}}>Django Project #4</CardTitle>
               <CardText>
                   working with class view in django and customizing User model in django
               </CardText>
               <CardActions border>
                   <Button colered ><a href = "https://github.com/sinajamshidi247/clase_base_view/">Github</a> </Button>
                   {/* <Button colered>Live Demo </Button> */}

               </CardActions>
               <CardMenu style = {{color : '#fff'}}>
                   <IconButton name = "share" />
               </CardMenu>
               </Card>
               </Cell>      
               <Cell col={4}> <Card shadow = {5} style = {{minWidth: '450', margin :'auto'}}>
               <CardTitle style = {{color:'red',height:'176px',background:
                   'url(https://www.mongard.ir/media/course/top_image/drf.jpg) center/ cover'}}>Django Project #5</CardTitle>
               <CardText>
                 Working with django_rest_framework and write api 
               </CardText>
               <CardActions border>
                   <Button colered ><a href = "https://github.com/sinajamshidi247/django_rest_framework/">Github</a> </Button>
                   {/* <Button colered>Live Demo </Button> */}

               </CardActions>
               <CardMenu style = {{color : '#fff'}}>
                   <IconButton name = "share" />
               </CardMenu>
               </Card>
               </Cell>      

                   <Cell col={4}> <Card shadow = {5} style = {{minWidth: '450', margin :'auto'}}>
               <CardTitle style = {{color:'red',height:'176px',background:
                   'url(data:image/png;base64,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) center/ cover'}}>Django Project #6</CardTitle>
               <CardText>
               e-commerce website , diffrent Categories , rating products, leave a Comment , checkout and paying
               </CardText>
               <CardActions border>
                   <Button colered ><a href = "https://github.com/sinajamshidi247/e-commerce/">Github</a> </Button>
                   {/* <Button colered>Live Demo </Button> */}

               </CardActions>
               <CardMenu style = {{color : '#fff'}}>
                   <IconButton name = "share" />
               </CardMenu>
               </Card>
               </Cell>    
               <Cell col={4}> <Card shadow = {5} style = {{minWidth: '450', margin :'auto'}}>
               <CardTitle style = {{color:'red',height:'176px',background:
                   'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt02U6zMVSb37SexDjiKQ7kE9g22K98ZOKew&usqp=CAU) center/ cover'}}>Django Project #6</CardTitle>
               <CardText>
               Cotact list , this project used to be a static project and i change it with django to dynamic
               </CardText>
               <CardActions border>
                   <Button colered ><a href = "https://github.com/sinajamshidi247/e-commerce/">Github</a> </Button>
                   {/* <Button colered>Live Demo </Button> */}

               </CardActions>
               <CardMenu style = {{color : '#fff'}}>
                   <IconButton name = "share" />
               </CardMenu>
               </Card>
               </Cell>
               <Cell col={4}> <Card shadow = {5} style = {{minWidth: '450', margin :'auto'}}>
               <CardTitle style = {{color:'red',height:'176px',background:
                   'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQENPXo2Uf9BzJYv82UEJFUQwgmk4Ry_mwbfg&usqp=CAU) center/ cover'}}>ML Project #1</CardTitle>
               <CardText>
              few month ago i worked with data and some ml algo , this is a project that can predict  forex stock market
               </CardText>
               <CardActions border>
                   <Button colered ><a href = "https://github.com/sinajamshidi247/machine_learning/">Github</a> </Button>
                   {/* <Button colered>Live Demo </Button> */}

               </CardActions>
               <CardMenu style = {{color : '#fff'}}>
                   <IconButton name = "share" />
               </CardMenu>
               </Card>
               </Cell>
               </Grid>
               </section>
               </div>
             
            
            
               
            
            )

        }else if(this.state.activeTab===1){
            // React projects 
            return(
                <div className= "pi">
               <section className = "projects-grid" style={{width: '80%', margin: 'auto'}}>
                <Grid className="demo-grid-1">
                    <Cell col = {-6}>
                <Card shadow = {5} style = {{minWidth: '450', margin :'auto'}}>
                <CardTitle style = {{color:'red',height:'176px',background:
                'url(data:image/jpeg;base64,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) center/ cover'}}>React Project #1</CardTitle>
            <CardText>
                my first project with react , todo list and it's  a gift :)
            </CardText>
            <CardActions border>
                <Button colered><a href = "https://github.com/sinajamshidi247/react-todoapp">Github </a></Button>
                <Button colered><a href ="https://todolist-sisili.herokuapp.com/">Live Demo</a></Button>

            </CardActions>
            <CardMenu style = {{color : '#fff'}}>
            </CardMenu>
            </Card>
            </Cell>
            <Cell col = {-4.5}>
                <Card shadow = {5} style = {{minWidth: '450', margin :'auto'}}>
                <CardTitle style = {{color:'red',height:'176px',background:
                'url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAREBIQExMVFhUQEBAVEBUXFRgSFQ8XFRUWFhUVFhUYHSggGBolGxcVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGBAQGy0gHSI3LS0tKysrLy01Li0tLS0tKystLy0tLS0tNS0tNS0tLzAtKystKy0tLSstLTUtLS0uN//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAgEEBQYHAwj/xABEEAABAwICBgcFBQUGBwAAAAABAAIDBBEFEgYTITFRYQcyQXGRobEiUnKBwRRCkrLRM2KCwvAjQ1Nj0uFEZIOio7Px/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAQFAQIDBv/EAC8RAQACAQIDBgUDBQAAAAAAAAABAgMEERIhMQUTQVHR8DJxgaGxI5HBIkJSYeH/2gAMAwEAAhEDEQA/AN9REVi80IiICIiAiIgIiICIiAiIgIiICIiAiIgIpNaSbAEngNqumYZMfueJA+qxMxHVvWlrfDG6zRXr8LmH3PAg/VWkkbmmxBB4EWSLRPQtjtX4omEURFloIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAr7DsOMu07Gjt7T3fqvKgpda8N7N7uQVn0jaYNw6BscQBmkBETfusA2F7hwG4DtPcVwzZeCE/RaTvp3noy2M6RUOHMGse1lx7LdrnydzRdzu/dzWjV3TMwE6mme4dhe9sV/k0OXJquqkmkdLI9z3vN3Ocbl3+3IbB2KAhdwVXbPaZekx6WlY2dZo+mcX/taV4H7kjZD4Oa31W74BpdQYgMrHgutcxuGWRvPKezm245r5vMLuCRSOY4Pa4tc03a5pLXNPEEbQUrntDN9LS0bPpTEsMyDOza3t4t/ULGrHdF+nBrGmlqCNfG299gE7NxdbscNmYbtoI7QM9itJq37Oq7a3lxCs8Gbjh5zXaPup4o6LJERSFcIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIM9gceWNz+0nyH+91876W4q6trp5r3BkLIuDY2EtZbv63e4r6HYSKJxG8RyEd+0r5lomWYDxAVRq7Tu9X2ZSIxx8o+71ZGApIigrQUZIwVJEEcLxCSkqI6hnWheHAe8PvN7i24+a+lMRe2WlbM3aLNe08Wnt8DdfNFS24vwX0NokScFpi7toY//ULKbpbc1d2hjicc/VaIoxH2R3KSuHkRERAREQERVQURUe4DaSB3mys5sXpmdaeIf9RvpdYZiJnovUWGl0roW/3wPwtc70CsptOaQbhK7uYB+ZwWOKHSMOSf7ZbMi0ybpBiHVhcfie1voCvJmmVXL+xpM3cJJfygLHHDeNLlnwbwi01lXjsvUpXNv/klnnKV6swHSGXeSy/GSJlvwXKxOWrpGiyT5NuUHyNbvIHebeq1pnR3i0n7WraAf86WQ+GUDzVxD0REm8lXfjliufFz/ote+h0jQT4yyM2M0rOtPEP4238Lqzm0soW/3wPwte7zAsr2n6JqMdead3cWMH5SfNXsnRhhpYWhsgcQbP1jiWnjbqn5ha9+6RoK+MrHC8Yp6kHVPDi3rCxa4c7Hs5q+XLNGS6HEI2E7RK+J/Zfey3iB4Lqa7VtvCFqMUY7bQz+CuDoSzgSD3FfO+NYaaWompiLamRzRzbvYfm0tPzXdMMq9W+53HY7lzWC6UtEHVLRWU7c0sbbSsG+Zg2gji5u3Z2juCrtZimecLzsrURw8M/L0cbREVavBEQoJxUz5XCJgu+QhjBxc42HmV9GVULaahbANzImRN7gA30C0Top0Oc1wr522sD9mYRt2jbKR2bNg7yeC3PSQSPLbD2Ad/Pn8vVWGjx895VHaeb+iYr4e/sxkQ9kdykgRWry4iIgIiIMXpPXPgpZJWdYZQ078uZwbe3K6wOD6HYnWwsqDVAMlGZodLI51rkbWgWG7ddZzSuEvo52gEnICANpJa4EWHyWw9HGdmGwRytcx7NaMrwWOtrHFpsdu4hcM0zCz0NazWd2qRdETybyVY52hJP4nP+iyVP0S0Y6807u7IwflK6Eij8UrHhhp8HRphbd8b3/FK/0aQFkodDcMZupIdnvN1n57rPKhF9ixvJtDUJtKsGpntiiMT3udl1dLEJ3tNidrYQT2HZvWw4XiJnBOomiaLZTK1rDJe+5gcXC37wG9aLjeIwUuIueyJoGH0wipomNyNlq6y7svsDYBFECXdjXErbdGcfFVTOmdlvG+Zry2+reI5HtEjCd7XNaHAXNg4IMfjGnMULKsxxPlfRvewtuGNkMcQmlIftytY02JI3loFy4X2aknEkbJBukY1w7nAEeq4xQQvkwp8l/7fHa50NON5jjknLp3HvyvueDWcFn9Fp6moxGOW7Q2DXtkb7Q+xxRmSCGmcL5TI+4lO4+wL7MqbMRLpyKGsH9BM/I+Cw2TRQDjw81NB8+YyzU4vL+7Xl/ydLnHkV1ArnHSdDkxSoI+8Inj5xtHqCuiRPzNa73mg+IupmLoqtdHOJ+aSyGGYrq7Mf1fuu93kVj0IW9qxaNpQ8eS2O29VNJdAaOuJmYdVK7aXsALZDxezce8EHmtFrOirEGE5DDIOwh5Yfm1w2eK3mJ8kf7NxHLs8Nyu2Y9O3eAfEfVQ76KJneFxh7W2jafVzil6LMScRm1MY7SZM1u4NBv4rddG+jakpSJZ3a+Ru0ZhliYR2hm255kn5LJP0hlO4NHiVZT1M0vWJtw3DwWKaGInmzl7X3jaPRsYxWJ79WHfPsdyBWRc1uUjst4rSo4AN+1XLq2cDKHbONhmHzXe2D/GUTHr+vHH7KTWD3tG5riAoKEUdu871NSFdM7zuIiIwIiIPRkpayXIQJdW4xE7QCAVbdFuJSVdJM6Z5e9tQ4Zja4BYwi1tgF77FKWIOWI6GHlprYjua+IjhcaxrtvH2WqPmr4rTQ33ia+TpNPFlFr32k8FNxPYPNSVCVGWKPtclYY6yQ08obOIHhoLJTYNjc0hwLrna24sR2glX+sHFeNRFHJYPYHhrg5oc0OAIvYi42HadvNBzelbRuZnkqJZqqSskqXSYfHLO1j3x6nVskEbmhoi9m5sRvBB2rPitlMH2WnwupEQiMTS+SGma1hbl2Xkc8bP3brbg7sDfQKt3cB4rO7Gzn2D6M18OpdHTUMToIRFHJLNNUyABoaX5GMjYHkAXcLE7tyzjMLxc7XV1OzlHR7vm+U+i2WzuSZTx8k3NiFrg1ocbuDRmIGUONtptfZt7FNQ1fM+KaoLDKWYcVVRDBwCkg4v0xwZa9j+ySmZ4tfID5ZVsuAS56Wndxgjv3hoBWM6bYfbo5OLahp+RjI9SvfQuXNQw/u52+D3fSylYZV2vj+mJ/2zaIi7qsREQEREBERAREQEREBERB7UoaXgO3ep7Asdorjc8uKVVFKGBkMchiY1tg3K9gBvvJLX93JXMjbiy1rRx2q0hyk/tY3jv/sQ/wBWLjlry3WGhvG/C6pBC5pO3Z2BexCqqFRFqrZFDIeJ9E1Y5+KCV1QvHEKmrHBSDRwQR1gTWcipoghmPDzT2uSkXDio6wcUCzuPkphQ1g5+CkCg5700w3pKd/u1OX8Ubz/KFhujuW9I5vuTvHyLWu9SVtfSzDmwyR3+HLC7xeGejlpHRrL7NQzg6N34g4fyqRhQtbH6c/RuiIikqcREQEREBERAREQEREBERBUf1yWOxLFRTYnS07YIwKgxB85F5HBziwBrhusbcd+5ZAhaXpm4xVNDKTsjkBHIMkjd+q55I3hM0d4i+3m6+InhwsfZ7bnysrglVRQlyhnPA+iXdwHipXVC8cQgp7XJMp4+Sa0JrORQNXzPimrCZjw809rkg1yoxyeLEG0bqbPHM3PDMw2yNbYP1jXbPZJG0H7zdlytjY8HcvKoiJF77RtGzxCxFTiAJyt7Ot+gUTVaqNPHFbp+XTFim/Rn0WMoqwO2OPzv5FZJrQNy6YNRTPXipLW9JrO0sDp9DnwyrHCBz/wWf/KuVdG8tp5m+9ED+Fw/1LtGMwaymnj/AMSCVv4mEfVcJ0AltWNHvxSN8s38qm4Z5omqjfHLpyIilqMREQEREBERAREQEREBERAWK0xlpqeninmphUEvLY2uOVjCQT7Ww32N4FZVa5p21xoni92iSN1uBzW+XWWl43hI01orkjd0enme6KOVlzrGMdbfbM0Eb+9X4WF0Jmz4dRu/5aJp72NDT6LNqFK8hARjgpBo4KJzckynj5LDKaKGr5nxTVBBIuHFR1g4qoYOAUrIIawc/BYjFMLzHPGCHdvNZpUJXPLiplrNbxvDal7UnerUYpTex2OG8LMUGIfddu8x+oXpimHslFwQHDcVgmvc12V2xw3HsK85mwZtDk48c7198pWFbUz128fL0beCCO9fPGAN1OIxs9yofH+aNdsoa8t2Hdw/RcZx1mpxaQ2IH20SNuCLtdLnBHLar/s/W01EcuU+MKzVYZrExLpyKpVFcvNiIiAiIgIiICIiAiIgIiIC8MVpYH0szqjNqmNu8M6zspDrDwC91b4gX6mVg2iSGRrhvG1pF/Na2iZjk6YrVreJsyuhFXFJQsdTNcyJjpGtjcc7hZxvc3N73vv7VscDy5oJFt+xaH0Lz3oZWe5Uu+QdHGfW66AoNuq/hFzwFTWcj4KaLDZDMeHmntclIuCiZBxQMruPkmQ8T6JrBz8EzngUDVjn4pqxwS7uHmlnckEg0K1r6BkrbHf2HtCuMp4+SBnMrFqxaNp5wzEzE7w1SaN8Lsr933Xce9WWOYNDWR5JNj2/spR1mH6jl/8AVutVTNkaWuGxahXStp6gUznbXszxg/ebcg2PaRbaOa89qtDk01u+wTyj7f8APcp+PLXNHDfr+U3xluw+PFRV0x4Isdo7DwXjLEW93YVd9m9q01McF+V/z8vR53XdnWwTxV51/HzeaIiuFYIiICIiAiIgIiICIiAvSGEvOXkb8gvNVEzmHM3eN433CxO+3JtXbiji6Lbo5jpIjU09JI+RzDGZi8ZWk+00ZNg4G/y2rdaaozXFtrbXXM+jqXLjFdHawkbK8DsFpWkDweV1NQbxtL0FJ3iJRc2/FU1QUnEqPtclq3VDBwCrZRs7j5JkPE+iCaXUNWOfimrbwQVLxxCprApBo4KqCGfkUzHh5qaoXDigquV9NcRD6OUXBAnbcbCCDG5pB7DvXVAVzzppgvSQP9ypA+To3/VoW1erFuiy0UxN8lNG95u45g47s2VxAPfay2WGYEcQd/JaZ0fOD6R7T9yd4Hza0+pK2SD2Hi52eRVTruxpmYy6blPl/Me/l5GDtOvFbFn+k/xPr+6+lpiBmG1vmFbqWIYkHDVs3DrfoOS8oTdoV3pbW4Yped5jxQNfoe6pGaOUWn4ffuOSaIilKoREQEREBERAREQFUBUTMRtG8bR3hGYY/CcNhp8W1pqG6+drgynAubGMElzuzqE7bblvrKn2spFifn2XXKMSqgMcoZsuXOYWu5uc58ZPg4LrmUXvYX49qhZInfmvsMxNI4eiRKhrBxU0subshrBz8EzngfRTRBC7uHmlnclNEEMp4+SavmfFTVCQgjqgqhg4KhkHEKmub/QRjeHotP6WIc2GSn/Dkgd/5Gs9HFbPNXRs2uIHxEN9StN6QtJKR1BPCJY3vlDWsYx4e6+YG5ynYBa9ytojmxMxs1Ho1l9moZwdG7xDh9At0c0EWK5/0by2nlZ70IP4XD/UugqZTopNVG2WVoaPbfzV2BbYiLbZytkvbaLTM7dN/AREWWgiIgIiICIiAiIgIiINN05dq6min9yS5PwPjd+q7IZBxC490lsH2eJx7JspPYMzT9QFrc2muIEWNW8C3ZkZ5tAKjZa7yuNJf9KH0HrmrzmrGN2uIHeQ31K+bKnSOZ3Xq5Xd8zz5XVkycSG7WveT2tY55PktO7SJyPo6o0qoo+tUQDlrWX8AVjKjpDw5n9+D8LJH+YbZcOhoKp/VpZz3xlg8XWV5Fo5iDv8Ahw34pWDyButoxOc56R1s6nUdKdEOqJn90bQP+5wWNqOlln3KZ5+KQM/K1y0mLQyvO90DP4nuPk2yuo9A5j1qpo5Nhv5l30W0YZ8nOdXjjxZqo6VKk9SCJvxOe/0yrGz9I2Iu3OiZ8MQP5yV6RdH0X3p53fDlYPylXkWgNEOsyR/xSP8AoQtowuc62jXanTbEHdareO7JH+UBYmp0ild16qV3fM931XR4dD6Ju6mi/iGf811kYMIiZ1Y42/Cxo9As905zro8IccjmEm1rXyH91jn38ldxYfVP6tLOe9mQeLl2IU/NS+zjmtu7hpOtt4Q0/QTAZoZHTzANc5hYyMEOLWkguc4jZckDYOHNbqqMYBuVVtEbdEW95vbikREWWgiIgIiICIiAiIgIiICIiDwrqRk0Zje0Oa7rNcLh3IhYOHQ+ibupo/4hn/MStjRGYtMdJY2nwaFnUiib8LGj0CuxT817om7Dy+zjmqiFvBeiJuIiMcApAIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIKoiLDZ//2Q==) center/ cover'}}>React Project #1</CardTitle>
            <CardText>
               simple site 
            </CardText>
            <CardActions border>
                <Button colered><a href = "https://github.com/sinajamshidi247/react-todoapp">Github </a></Button>
        

            </CardActions>
            <CardMenu style = {{color : '#fff'}}>
            </CardMenu>
            </Card>
            </Cell>
            <Cell col = {-4.5}>
                <Card shadow = {5} style = {{minWidth: '450', margin :'auto'}}>
                <CardTitle style = {{color:'red',height:'176px',background:
                'url(data:image/jpeg;base64,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) center/ cover'}}>React Project #1</CardTitle>
            <CardText>
               what you look at now :)
            </CardText>
            <CardActions border>
                <Button colered><a href = "https://github.com/sinajamshidi247/react-todoapp">Github </a></Button>
                <Button colered><a href ="https://todolist-sisili.herokuapp.com/">Live Demo</a></Button>

            </CardActions>
            <CardMenu style = {{color : '#fff'}}>
            </CardMenu>
            </Card>
            </Cell>
            </Grid>
            </section>
            </div>
            
            )
        }
    }
    render(){
    return (
        <div className = "new">
   <div className = "category-tabs">
       <Tabs activeTab={this.state.activeTab} onChange={(TabId) => this.setState({activeTab:TabId})} ripple>
            <Tab>Django/Python</Tab>
            <Tab>React/Js</Tab>
       </Tabs>
       <Grid>
           <Cell col = {12} ><div className = "content">{this.toggleCategories()}</div></Cell>
       </Grid>
       
   </div>
   </div>
    );
  }
}
  
  export default Projects;