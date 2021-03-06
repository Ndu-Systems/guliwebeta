import { PendingDownloadsComponent } from './dash-board/admin-dashboard/pending-downloads/pending-downloads.component';
import { ListPendingDownloadsComponent } from './purchases/list-pending-downloads/list-pending-downloads.component';
import { AddArticleComponent } from './article/add-article/add-article.component';
import { GetUsersComponent } from './users/get-users/get-users.component';
import { ForgotPasswordEmailComponent } from './account/forgot-password/forgot-password-email/forgot-password-email.component';
import { ForgotPasswordComponent } from './account/forgot-password/forgot-password.component';
import { AdminChangePasswordComponent } from './dash-board/admin-dashboard/admin-change-password/admin-change-password.component';
import { MyProfileComponent } from './dash-board/user-dashboard/my-profile/my-profile.component';
import { AdminProfileComponent } from './dash-board/admin-dashboard/admin-profile/admin-profile.component';
import { UserProfileComponent } from './account/user-profile/user-profile.component';
import { ChangePasswordComponent } from './account/change-password/change-password.component';
import { DirectDepositComponent } from './payments/direct-deposit/direct-deposit.component';
import { CartComponent } from './shopping-cart/cart/cart.component';
import { CheckoutComponent } from './shopping-cart/checkout/checkout.component';
import { PayFastComponent } from './payments/pay-fast/pay-fast.component';
import { UserDashboardComponent } from './dash-board/user-dashboard/user-dashboard.component';
import { AdminNavComponent } from './dash-board/admin-dashboard/admin-nav/admin-nav.component';
import { AdminDashboardComponent } from './dash-board/admin-dashboard/admin-dashboard.component';
import { GetArticlesComponent } from './article/get-articles/get-articles.component';
import { HomeNavComponent } from './home/home-nav/home-nav.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TopPaidArticlesComponent } from './article/top-paid-articles/top-paid-articles.component';
import { UserLoginComponent } from './account/user-login/user-login.component';
import { UserRegistrationComponent } from './account/user-registration/user-registration.component';
import { UserLogoutComponent } from './account/user-logout/user-logout.component';
import { UserNavComponent } from './dash-board/user-dashboard/user-nav/user-nav.component';
import { ViewArticleComponent } from './article/view-article/view-article.component';
import { UnAuthorizedComponent } from './account/un-authorized/un-authorized.component';
import { UserChangePasswordComponent } from './dash-board/user-dashboard/user-change-password/user-change-password.component';
import { ViewUsersComponent } from './dash-board/admin-dashboard/view-users/view-users.component';
import { ListArticlesComponent } from './article/list-articles/list-articles.component';
import { ViewArticlesComponent } from './dash-board/admin-dashboard/view-articles/view-articles.component';
import { TopSellingArticlesComponent } from './article/top-selling-articles/top-selling-articles.component';
import { ListPurchasesComponent } from './purchases/list-purchases/list-purchases.component';
import { MyPurchasesComponent } from './dash-board/user-dashboard/my-purchases/my-purchases.component';

//Create routes here with components
const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "top-paid", component: TopPaidArticlesComponent },
    { path: "login", component: UserLoginComponent },
    { path: "logout", component: UserLogoutComponent },
    { path: "register", component: UserRegistrationComponent },
    { path: "admin-dashboard", component: AdminDashboardComponent },
    { path: "user-dashboard", component: UserDashboardComponent },
    { path: "direct-deposit-success", component: DirectDepositComponent },
    { path: "view-article/:ArticleId", component: ViewArticleComponent },
    { path: "add-article", component: AddArticleComponent },
    { path: "un-authorized", component: UnAuthorizedComponent },
    { path: "publisher-profile", component: AdminProfileComponent },
    { path: "publisher-change-password", component: AdminChangePasswordComponent },
    { path: "user-change-password", component: UserChangePasswordComponent },
    { path: "my-profile", component: MyProfileComponent },
    { path: "forgot-password", component: ForgotPasswordEmailComponent },
    { path: "reset-password", component: ForgotPasswordComponent },
    { path: "checkout", component: CheckoutComponent },
    { path: "view-subscribers", component: ViewUsersComponent },
    { path: "view-articles", component: ViewArticlesComponent },
    { path: "pending-downloads", component: PendingDownloadsComponent },
    { path: "my-purchases", component: MyPurchasesComponent },
    { path: "**", component: HomeComponent }
];

//Add Components here to export
export const routingComponents = [
    HomeComponent,
    HomeNavComponent,
    GetArticlesComponent,
    TopPaidArticlesComponent,
    UserLoginComponent,
    UserRegistrationComponent,
    UserLogoutComponent,
    AdminDashboardComponent,
    AdminNavComponent,
    UserDashboardComponent,
    UserNavComponent,
    ViewArticleComponent,
    PayFastComponent,
    CheckoutComponent,
    CartComponent,
    DirectDepositComponent,
    UnAuthorizedComponent,
    ChangePasswordComponent,
    UserProfileComponent,
    AdminProfileComponent,
    MyProfileComponent,
    AdminChangePasswordComponent,
    UserChangePasswordComponent,
    ForgotPasswordComponent,
    ForgotPasswordEmailComponent,
    ViewUsersComponent,
    AddArticleComponent,
    GetUsersComponent,
    ListArticlesComponent,
    ViewArticlesComponent,
    TopSellingArticlesComponent,
    ListPendingDownloadsComponent,
    PendingDownloadsComponent,
    ListPurchasesComponent,
    MyPurchasesComponent
];

//Compile into on Ngmodule
@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})

//Reference below in the app.module.ts
export class AppRoutingModule {
}