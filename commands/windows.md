

## Sources
https://stevessmarthomeguide.com/windows-networking-commands/
https://support.microsoft.com/en-us/windows/fix-wi-fi-connection-issues-in-windows-9424a1f7-6a3b-65a6-4d78-7f07eee84d2c
https://helpdeskgeek.com/help-desk/21-cmd-commands-all-windows-users-should-know/



## AppX

Install example:

```powershell
Add-AppXPackage -DisableDevelopmentMode -Register "C:\Program Files\WindowsApps\Microsoft.Windows.Photos_2019.19071.12548.0_x64__8wekyb3d8bbwe\AppxManifest.xml"
```

Uninstall example:
```powershell
Get-AppXPackage *Microsoft.Windows.Photos* | Remove-AppXPackage
```

