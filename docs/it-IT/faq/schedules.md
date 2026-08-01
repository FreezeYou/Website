# Scheduled Task - FAQ
[[toc]]

## It seems that the scheduled task is not working
* Is `FreezeYou` the latest version?
* Has `FreezeYou` been added to the allow-to-run list of the system? For example, allow running in the background, ignoring battery optimizations.
* Are spaces missing in tasks? 
* Are there extra spaces in the task?
* Commas should be `,`, not `，`.
* Pay attention to capitalization!

## Why the actual execution is sometimes a little later
* Since Android 6.0, Google introduced one new power-save mode, which organizes some tasks of applications to perform together in order to reduce power consumption, which will cause some tasks to be delayed.
* Since these applications usually wake up the system frequently or even continuously, the scheduled tasks of `FreezeYou` can generally be executed on time when the applications are running.

## Manually entering the package name is so troublesome
* In **Application List**, click the corresponding application (by default, **Click Function** is set to **Choose Action**), the interface for selecting the operation will appear, which has the function of **Copy Package Name**.
* In **Application List**, in the multi-selection mode (long press), you can select **Copy After Being Formatted** in the menu, and then paste the content to the place where you need to enter.<Badge text="6.7+" type="tip" vertical="top"/>

## Wi-Fi not turned on as planned
* See **It seems that the scheduled task is not working**.
* Please check whether the airplane mode is turned on. On some devices, when the airplane mode is turned on, `FreezeYou` cannot turn on or turn off the Wi-Fi.

## Cellular data not turned on as planned
* The function is currently only supported on **Android 4.4 and below** or **with ROOT permission** or **`FreezeYou` has been installed as a high-privilege system application** on the device.
* Check if the `Enable or Disable Cellular Data` permission is granted.

## How to get the alias of my customization
* Go to `Settings` - `Manage space` - `Manage my customization`, click the appropriate item, then click **Copy Alias**.

## More Faq
* [FAQ](../faq/)

## Need More Help
- [Contact Us](../about/contactUs.md)

