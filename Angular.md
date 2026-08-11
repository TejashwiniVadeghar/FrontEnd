# Null-Safe Navigation (?.)
?. reads values that might be missing without throwing errors

If any segment is null or undefined, the result is undefined.
Improves safety for deep property paths in templates.


Safely read optional values with ?. and provide defaults with ??.


# Anatomy of a Component
Selector: the tag you place in templates (e.g., <app-root>).
Template and styles: inline or external files.
Standalone: set standalone: true and import dependencies in imports.
import { Component } from '@angular/core';

@Component({
  selector: 'hello-comp',
  standalone: true,
  imports: [],
  styles: [`:host { display: block; }`],
  template: `<p>Hello!</p>`
})
export class HelloComponent {}
