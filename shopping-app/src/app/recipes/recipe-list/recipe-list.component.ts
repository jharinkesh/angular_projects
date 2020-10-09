import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[]=[
    new Recipe("Daal","used with rice","https://www.thespruceeats.com/thmb/tJ2SrA6E2V-u235l3fUm6Y2AB1Q=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/masala-dal-589211843df78caebc7b583b.jpg"),
    new Recipe("Idli","used with sambhar","https://upload.wikimedia.org/wikipedia/commons/8/86/Idli_-_A_Traditional_Indian_Food.JPG")
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
