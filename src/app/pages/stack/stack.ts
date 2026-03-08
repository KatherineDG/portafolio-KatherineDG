import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-stack',
  imports: [],
  templateUrl: './stack.html',
  styleUrl: './stack.css',
})
export class Stack {

  filterSelected = signal('frontend')

  frontendTech = [
    {logo: 'html', name: 'HTML'},
    {logo: 'css', name: 'CSS'},
    {logo: 'javascript', name: 'JavaScript'},
    {logo: 'react', name: 'React'},
    {logo: 'nextjs', name: 'Next.js'},
    {logo: 'angular', name: 'Angular'},
    {logo: 'ionic', name: 'Ionic'},
    {logo: 'figma', name: 'Figma'},
    {logo: 'github', name: 'GitHub'},
  ]

  backendTech = [
    {logo: 'nodejs', name: 'Node.js'},
    {logo: 'typescript', name: 'TypeScript'},
    {logo: 'java', name: 'Java'},
    {logo: 'python', name: 'Python'},
    {logo: 'spring-boot', name: 'Spring Boot'},
    {logo: 'flask', name: 'Flask'},
    {logo: 'django', name: 'Django'},
    {logo: 'jwt', name: 'JWT'},
    {logo: 'express-js', name: 'Express.js'},
    {logo: 'github', name: 'GitHub'},
  ]

  databaseTech = [
    {logo: 'sql-server', name: 'SQL Server'},
    {logo: 'mysql', name: 'MySQL'},
    {logo: 'postgresql', name: 'PostgreSQL'},
    {logo: 'mongodb', name: 'MongoDB'},
    {logo: 'redis', name: 'Redis'},
    {logo: 'prisma-orm', name: 'Prisma'},
    {logo: 'mongoose', name: 'Mongoose'},
  ]

  cloudarchTech = [
    {logo: 'aws', name: 'AWS'},
    {logo: 'docker', name: 'Docker'},
  ]

  technologies = signal<Array<any>>(this.frontendTech) //crear interface | type



  public selectFilter(filterType: string): void {
    this.filterSelected.set(filterType)

    switch(filterType) {
      case ('frontend'): 
        this.technologies.set(this.frontendTech);
        break;
      case ('backend'): 
        this.technologies.set(this.backendTech)
        break;
      case ('database'): 
        this.technologies.set(this.databaseTech)
        break;
      case ('cloudarch'): 
        this.technologies.set(this.cloudarchTech)
        break;
    }
  }

}
