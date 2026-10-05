# Student Portfolio

A responsive, semantic HTML and CSS portfolio for a BSc CSIT student. The site uses an external stylesheet, CSS Grid and Flexbox, mobile breakpoints, a locally stored SVG illustration, and no JavaScript dependencies.

## Files

- `index.html` — semantic page content and accessible navigation
- `style.css` — palette, typography, layouts, interaction states, and responsive rules
- `assets/portfolio-illustration.svg` — local hero illustration
- `screenshots/` — source and rendered-output images included in the project report

## Personalize before publishing

1. Add your name, institution, and any details required by your course.
2. Replace the `your.email@example.com` contact link in `index.html` with your preferred public contact address, or remove that button.
3. Review the project descriptions and adjust them to match your actual work.
4. Add your GitHub and other professional profile links if you want them shown.

## Commit and publish with GitHub Pages

1. Create a **public** repository named `portfolio-assignment` on your GitHub account.
2. In this folder, initialize Git and make the first commit:

   ```text
   git init -b main
   git add index.html style.css assets README.md screenshots
   git commit -m "Create responsive student portfolio"
   ```

3. Connect the local project to your repository and push the commit:

   ```text
   git remote add origin https://github.com/YOUR-USERNAME/portfolio-assignment.git
   git push -u origin main
   ```

4. In the repository, open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/(root)`, and save.
5. Wait for the Pages build to finish. The project URL will use the form `https://YOUR-USERNAME.github.io/portfolio-assignment/`.
6. Check the repository and published site in a private browser window. Add the confirmed URLs to the report before submitting.

The repository and site URLs above are patterns only; replace `YOUR-USERNAME` with your GitHub account name after creating and publishing the repository.
