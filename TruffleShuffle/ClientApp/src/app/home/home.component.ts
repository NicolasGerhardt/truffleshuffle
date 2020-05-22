import { Component } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../interfaces/recipe';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  recipes: Recipe[];
  user: User;

  constructor(private recipeData: RecipeService,
    private userData: UserService) { }

  ngOnInit() {
    this.getAllRecipes();
  }

  getAllRecipes() {
    this.recipeData.getAllRecipes().subscribe(
      (data: Recipe[]) => {
        this.recipes = data;
      },
      error => console.error(error)
    );
  }

  login() {
    userName: this.user.userName;
    userPassword: this.user.userName
  }

  showSignIn: boolean = false;
  showLognIn: boolean = false;

  showLoginForm() {
    if (this.showLognIn === false) {
      this.showLognIn = true;
    }
    else {
      this.showLognIn = false;
    }
  }

  showSignUpForm() {
    if (this.showSignIn === false) {
      this.showSignIn = true;
    }
    else {
      this.showSignIn = false;
    }
  }
}
