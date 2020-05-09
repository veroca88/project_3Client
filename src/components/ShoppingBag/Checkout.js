import React from 'react'
import { Link } from 'react-router-dom'

export default function Checkout() {
    return (
        <section class="page_404">
	<div class="container">
		<div class="row">	
		<div class="col-sm-12 ">
		<div class="col-sm-10 col-sm-offset-1  text-center">
		<div class="four_zero_four_bg">
			<h1 class="text-center ">Ups! Look like I'm still working on it</h1>
		
		
		</div>
		
		<div class="contant_box_404">
		<h3 class="h2">
		Coming Soon!!
		</h3>
		
		{/* <p>..Thank you!</p> */}
		<div className="btn-center product-price-btn">
            <Link to="/">
            <button>Go to Home</button>
            </Link>
        </div>
	</div>
		</div>
		</div>
		</div>
	</div>
</section>
    )
}
