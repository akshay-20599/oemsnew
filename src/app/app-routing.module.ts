import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { HomeComponent } from './Pages/home/home.component';
import { AdminDashboardComponent } from './Components/Admin/admin-dashboard/admin-dashboard.component';
import { AdminSidebarComponent } from './Components/Admin/admin-sidebar/admin-sidebar.component';
import { WelcomePageComponent } from './Components/Admin/welcome-page/welcome-page.component';
import { AdminProfileComponent } from './Components/Admin/admin-profile/admin-profile.component';
import { AllCategoryComponent } from './Components/Admin/all-category/all-category.component';
import { AddCategoryComponent } from './Components/Admin/add-category/add-category.component';
import { UpdateCategoryComponent } from './Components/Admin/update-category/update-category.component';
import { AllQuizesComponent } from './Components/Admin/all-quizes/all-quizes.component';
import { AddQuizComponent } from './Components/Admin/add-quiz/add-quiz.component';
import { ViewQuistionsComponent } from './Components/Admin/view-quistions/view-quistions.component';
import { AddQuestionsComponent } from './Components/Admin/add-questions/add-questions.component';
import { adminGuard } from './service/Admin-Guard/admin.guard';
import { UserDashboardComponent } from './Components/user/user-dashboard/user-dashboard.component';
import { UserWellcomePageComponent } from './Components/user/user-wellcome-page/user-wellcome-page.component';
import { UserProfileComponent } from './Components/user/user-profile/user-profile.component';
import { userguard } from './service/user-guard/user.guard';
import { UpdateQuizComponent } from './Components/Admin/update-quiz/update-quiz.component';
import { UpdateQuestionComponent } from './Components/Admin/update-question/update-question.component';
import { LoadQuizesComponent } from './Components/user/load-quizes/load-quizes.component';
import { InstructionComponent } from './Components/user/instruction/instruction.component';
import { StartExamComponent } from './Components/user/start-exam/start-exam.component';


const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'admin-dash',component:AdminDashboardComponent,
    canActivate:[adminGuard],
    children:[
      {path:'',component:WelcomePageComponent},
      {path:'profile',component:AdminProfileComponent},
      { path:'all-cate',component:AllCategoryComponent},
      {path:'add-category',component:AddCategoryComponent},
      {path:'update-category/:id',component:UpdateCategoryComponent},
      {path:'all-quiz',component:AllQuizesComponent},
      {path:'Add-quiz',component:AddQuizComponent},
      {path:'update-quiz/:id',component:UpdateQuizComponent},
      {path:'veiw-question/:id/:title',component:ViewQuistionsComponent},
      {path:'add-question/:id/:title',component:AddQuestionsComponent},
      {path:'update-question/:id/:title',component:UpdateQuestionComponent}
    ]
  },
{
  path:'user-dash',component:UserDashboardComponent,
  canActivate:[userguard],
  children:[
    {path:'',component:UserWellcomePageComponent},
    {path:'user-profile',component:UserProfileComponent},
    {path:':category_id',component:LoadQuizesComponent},
    {path:'instructions/:quiz_id',component:InstructionComponent}
   
  ]
},
{
  path:'startExam/:quiz_id',component:StartExamComponent
}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
