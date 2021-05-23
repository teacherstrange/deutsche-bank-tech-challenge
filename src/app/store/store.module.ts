import { NgModule } from '@angular/core'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from '../../environments/environment'
import countriesReducer from './countries/countries.reducer'
import { CountriesEffects } from './countries/countries.effects'


// reducers
const combinedReducers = ({
  countries: countriesReducer,
})

// effects
const availableEffects = [
  CountriesEffects
]

/**
 * The following module imports all the required dependencies to run the application's NgRx global store
 * and declares the involved states and effects (using the `combinedReducers` and `availableEffects` constants).
 * The purpose of this module is to centralise the declarations of reducers and effects.
 * It should be imported into `app.module.ts`
 */
@NgModule({
  imports: [
    StoreModule.forRoot(combinedReducers),
    EffectsModule.forRoot(availableEffects),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
})
export class RootStoreModule {
}
