# File-System-Organizer
A global command-line application that can organize all your files from a folder into different sections based on the file type.

### How to use it:
* Download and install Node.js 
* Download this github repository and open command line interpreter application(Command Prompt/Terminal) in downloaded folder.
* Type command "npm link" in command line interpreter application and press enter.
Now the setup is ready.
* List of all commands that can run on command line interpreter application:
  1) fso help     
  2) fso tree "directoryPath"
  3) fso organize "directoryPath"

### What each command does:
* fso help -> displays all the commands available.
* fso tree "directoryPath" -> displays file-system of that location in form of n-ary tree.
* fso organize "directoryPath" -> make a folder "organized_files" in that location having subfolders in it for each type of file present at the location and then put each file in its respective folder based on its extension.

