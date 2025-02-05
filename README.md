<p align="center"><a href="https://kindliing.github.io/Kindliing/"><img src="img/logo.png" alt="Kindliing logo" height="300"></p>
Kindliing is a free Kindle library where you can browse and download free e-books right on your Kindle!

## Why you should use Kindliing
Contrary to other free e-book websites, Kindliing is made especially to work on the Kindle's web browser. That means that you can browse and download books right on your Kindle with little to no problems! Just make sure that you have a good Wi-Fi connection.
## How to open Kindliing on your Kindle
1. Open your Kindle's home page and tap on the triple dots at the top right.
2. Tap on "Web Browser." On older Kindle versions, it might be called "Experimental Browser" instead.
3. Once the browser has loaded, tap on the address bar at the top. Using the on-screen keyboard, type in `kindliing.github.io/Kindliing` (case-sensitive!) and press enter.
4. You should be there once it has loaded! If you want to, you can tap on the triple dots again in the browser and then tap "Bookmark this page" so that you can access Kindliing more easily later.
5. You should see a search bar labeled "Search for a document and start reading!" Tap on that and the on-screen keyboard should show up again. Type in what you want to read, and then press enter. Keep in mind that Kindliing is still very small, so it might not have the thing that you want to read at the moment.
6. It might take a few seconds to load the results because Kindle browsers are typically slower than regular browsers. Once it loads, you will see a list of what you searched for, or you might see that there were no results. If nothing you search yields any results, go to the home page and tap on "Show all documents" to view the entire catalog.
7. Tap on one of the results. It'll take a few seconds to load. Once it loads, you should see a few links, some info, and the cover of the document.
8. If you think the document looks good, you can tap on "Download this document" to open up a dialog that will ask you if you want to download the file. Don't worry, all of the documents on Kindliing have been reviewed by staff to be safe, so you can just tap "OK."
9. It should say that the web browser successfully downloaded the file. If it does, tap "OK" and go back to your Kindle's home screen.
10. Start reading your new e-book!
## Publishing an e-book on Kindliing
If you want to put your book on the Kindle store for other people to download but want to make it free/don't have the resources to actually publish it, or you want to publish an existing public domain/Creative Commons book, publishing on Kindliing is for you! This guide can easily show you how to get started publishing a document to Kindliing for free!
1. *Make sure you have the rights to publish it and that there's no inappropriate content.* Kindliing will not publish a document that it knows it doesn't have the rights to. If you see something in the catalog that is not open for use, open an issue! If you provide a link to the publication of the file elsewhere, we will delete it from the catalog if we haven't received permission from the author. Also, our documents are supposed to be for all ages, so just remove all inappropriate content from any books you publish on Kindliing.
2. *Make sure that it's in the right format.* Confirmed you have the rights to publish the document and that it's for all ages? Great! Now make sure that it's in the .azw3 format. Kindliing requires its publishers to use .azw3 because it's the most up-to-date format that the Kindle supports downloading through its browser. If your book is in another e-book format like .epub and you don't know how to convert it, [calibre](https://calibre-ebook.com/) is a great software you can use to do so.
3. *Fork the Kindliing GitHub repo.* If you're reading this from the README.md file on GitHub, you're already there! Just scroll to the top of the page and click on the Fork button. [Here's the repo link if you need to get there.](https://github.com/Kindliing/Kindliing) Keep in mind, you need to be signed in to GitHub to fork the repo. Once you've forked it, scroll back down here for further instructions.
4. *Clone the fork onto your computer and add your files.* Click on the "Code" button at the top of the page on your repo, and then click on the GitHub Desktop option. There's another way to do it with Git in the terminal, but we will use GitHub Desktop for this tutorial. Install GitHub Desktop if you have not, and then choose a path to clone the fork into. Once that's done, open the folder with an IDE like [Visual Studio Code.](https://code.visualstudio.com/) Once you've opened the folder with an IDE, open up the folder labelled `doc` (it stands for "document"). You should see a plethora of files inside roughly matching the names of books. Don't edit any of these, just drag your .azw3 file into this folder. Now rename it to a shortened, lowercase version of your title with underscores instead of spaces. For example, "The Title of the Tutorial" would become `title_of_the_tutorial.azw3`. Optionally, you can also insert a .jpg of your book's cover into the folder, with the same file name as the .azw3 you want to insert. Repeat this for all books you want to publish, making sure you're following the rules in step 1.
5. *Add your books to the list.* Outside of the `doc` folder, you should see another file named `list.json`. This tells your Kindle what files are in the catalog when searching through it. Open up the file, and you should see a ton of lines following the format:
    ```json
    ["Book Name - Author","file_name_without_extension","License"],
    ```
    For example, following the previous "The Title of the Tutorial" example, we would add this line to the list:
    ```json
    ["The Title of the Tutorial - Kindliing","title_of_the_tutorial","CC BY 4.0"],
    ```
    The license CC BY 4.0 (Creative Commons Attribution 4.0) was used in this example, but you can use any license you want for your document, as long as you don't put "All Rights Reserved"—remember, this library is supposed to be free! Repeat this format in *new lines* for all the documents you're publishing. If you're adding a series to Kindliing/adding more books from a series, make sure they're in order on the `list.json` so readers can find them better!
7. *Open your pull request.* Make sure to save your changes to `list.json`. Then in GitHub Desktop, there should be an option to make a pull request. Click that, and follow the instructions there. Once you've made your pull request, Kindliing staff will review it. If you did everything right, it should be approved and pushed to the main repo soon!
