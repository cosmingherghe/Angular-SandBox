import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      "Banana Bread",
      "This banana bread recipe creates the most delicious, moist loaf with loads of banana flavor.",
      "https://www.simplyrecipes.com/thmb/tR-5eHAZ3lgNR6Yvu3yxdHMNpk8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Easy-Banana-Bread-LEAD-2-2-63dd39af009945d58f5bf4c2ae8d6070.jpg"),
    new Recipe(
      "Caprese Salad",
      "Fresh, juicy tomatoes are the star of this classic salad. Just four ingredients and you have the perfect appetizer for your next gathering. Top with basil and drizzle with olive oil to bring it all together.",
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/10/7/0/FNK_Caprese-Salad_s4x3.jpg.rend.hgtvcom.966.725.suffix/1383814461170.jpeg"),
  ];
}
