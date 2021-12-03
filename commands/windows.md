

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



## MS Store



### Fix apps failing to install
See: https://answers.microsoft.com/en-us/windows/forum/all/microsoft-store-keeps-trying-to-install/0f38210a-c6f2-402c-b0f4-7933fbb6ddd9
`> net stop wuauserv`
`> net stop cryptSvc`
`> net stop bits`
`> ren C:\Windows\SoftwareDistribution SoftwareDistribution.old`
`> ren C:\Windows\System32\catroot2 Catroot2.old`
`> net start wuauserv`
`> net start cryptSvc`
`> net start bits`
