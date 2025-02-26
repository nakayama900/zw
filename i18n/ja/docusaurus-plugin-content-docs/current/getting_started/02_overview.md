---
id: overview
title: Quick overview
sidebar_position: 2
image: /img/z-shell_501x501.png
description: Overview of use cases for Z-Shell ZI
keywords:
  - overview
  - zsh
  - z-shell
  - zi
---

In this overview will cover basics for:

1. [Oh My Zsh & Prezto](/search?q=Oh+My+Zsh+%26+Prezto)
2. [Completions](/search?q=completions)
3. [Turbo mode](/search?q=turbo+mode)
4. [Ice modifiers](/search?q=ice+modifiers)

## Basic Plugin Loading {#basic-plugin-loading}

```shell
zi load z-shell/H-S-MW
zi light zsh-users/zsh-syntax-highlighting
```

The above commands show two ways of basic plugin loading. `load`はレポート(プラグインが何をするかの追跡)を可能にし、`zi report {plugin-name}`で情報を出力でき、`zi unload {plugin-name}`でプラグインをアンロードすることができます。 Using `light` is a significantly faster loading without tracking and reporting, by using which user resigns of the ability to view the plugin report and to unload it.

:::note

In Turbo mode the slowdown caused by tracking is negligible..

:::

## Oh My Zsh, Prezto {#oh-my-zsh-prezto}

To load Oh My Zsh and Prezto plugins, use the `snippet` feature. Snippets are single files downloaded by `curl`, `wget`, etc. (automatic detection of the download tool is being performed) directly from the URL. For example:

```shell
zi snippet 'https://github.com/robbyrussell/oh-my-zsh/raw/master/plugins/git/git.plugin.zsh'
zi snippet 'https://github.com/sorin-ionescu/prezto/blob/master/modules/helper/init.zsh'
```

Also, for Oh My Zsh and Prezto, you can use `OMZ::` and `PZT::` shorthands:

```shell
zi snippet OMZ::plugins/git/git.plugin.zsh
zi snippet PZT::modules/helper/init.zsh
```

Moreover, snippets support Subversion protocol, supported also by Github. This allows loading snippets that are multi-file (for example, a Prezto module can consist of two or more files, e.g. `init.zsh` and `alias.zsh`). Default files that will be sourced are: `*.plugin.zsh`, `init.zsh`, `*.zsh-theme`:

```shell {3}
# URL points to a directory
zi ice svn
zi snippet PZT::modules/docker
```

## Snippets and Performance {#snippets-and-performance}

Using `curl`, `wget`, etc. along with Subversion allows to almost completely avoid code dedicated to Oh My Zsh and Prezto, and also to other frameworks. これにより`ZI`のパフォーマンスが向上し、高速でコンパクトになります。 (メモリ使用量を低く抑え読み込み時間を短くすることができます。

## Ice-Modifiers {#ice-modifiers}

:::info

See: [ice-modifiers](../guides/ice-modifiers) for more information.

:::

The command `zi ice` provides ice-modifiers for single next command. この考え方は、"氷"が飲み物やコーヒーに入れられるようなもので、これをZIに置き換えると、iceは次のZIコマンドへ変更を与えることを意味しています。 また、溶けること(つまり長く続かない)は、ZIの中ではその変更は次のZIコマンドにのみ有効ということです。 ice修飾子"**pick**"を使うと、明示的に**読み込むファイルを選択できます**。

```shell {1}
zi ice svn pick"init.zsh"
zi snippet PZT::modules/git
```

Content of ice-modifier is simply put into `"…"`, `'…'`, or `$'…'`. ice修飾子名の後に`":"`は必要ありません(次のように`=`を使うことでも正しく動きますが。 e.g. `pick="init.zsh"`や`pick=init.zsh`)。 This way editors like `vim` and `emacs` and also `zsh-users/zsh-syntax-highlighting` and `z-shell/F-Sy-H` will highlight contents of ice-modifiers.

## as"program" {#asprogram}

A plugin might not be a file for sourcing, but a command to be added to `$PATH`. この効果を得るには、ice修飾子`as`とその値に`program`(またはエイリアスの`command`)を指定します。

```shell
zi ice as"program" cp"httpstat.sh -> httpstat" pick"httpstat"
zi light b4b4r07/httpstat
```

The above command will add plugin directory to `$PATH`, copy file `httpstat.sh` into `httpstat` and add execution rights (`+x`) to the file selected with `pick`, i.e. to `httpstat`. 別のice修飾子`mv`もあり、これは`cp`のように動きますが、ファイルを**コピー**する代わりに`移動`します。 `mv` is ran before `cp`.

:::tip

ice修飾子`cp`と`mv`(他に`atclone`などもあります)は、プラグインやスニペットがインストールする時に実行されます。 それらを再度試したい場合、はじめに`zi delete PZT::modules/osx`などのコマンドでプラグインやスニペットを削除してください。

:::

## atpull"…" {#atpull}

Copying file is safe for doing later updates – original files of the repository are unmodified and `Git` will report no conflicts. しかし、適切な `atpull` (プラグインの**更新時**に実行されるice修飾子) を使用すれば、`mv` も使用も使用できます。

```shell
zi ice as"program" mv"httpstat.sh -> httpstat" \
  pick"httpstat" atpull'!git reset --hard'
zi light b4b4r07/httpstat
```

`atpull` が `!` で始まる場合、`git pull`と`mv` の前に実行されます。 Nevertheless, `atpull`, `mv`, `cp` are run **only if new commits are to be fetched**. つまり、ユーザがプラグインを更新するために `zi update b4b4r07/httpstat` を実行して、新しいコミットが存在した場合、初めに`git reset --hard` が実行されて、元の `httpstat.sh` が**復元** され、**それから**`git pull` が実行されて新しいコミットをダウンロード(fast-forwardで)し、**次に**`mv` を再び実行してコマンドが `httpstat.sh` ではなく`httpstat` になります。 このようにすることで、ice修飾子`mv`では、`git`(スニペットで`subversion`を使用する場合に関しては下記を参照)による更新を妨げることなく永続的にプラグインの更新を取り込むことができます。

:::info

For exclamation mark to not be expanded by Zsh an interactive session, use `'…'` not `"…"` to enclose contents of `atpull` [ice-modifier](/search?q=ice-modifier).

:::

## Snippets as commands {#snippets-as-commands}

**スニペット**を使うことで、、`$PATH`にコマンドを追加することもできます。 For example:

```shell {2,4}
zi ice mv"httpstat.sh -> httpstat" \
  pick"httpstat" as"program"
zi snippet \
  https://github.com/b4b4r07/httpstat/blob/master/httpstat.sh
```

:::tip

Snippets also support `atpull` [ice-modifier](/search?q=ice-modifier), so it’s possible to do e.g. `atpull'!svn revert'`. There’s also `atinit` ice-modifier, executed before each loading of plugin or snippet.

:::

## Snippets as completions {#snippets-as-completions}

By using the `as''` ice-mod with value `completion` you can point the `snippet` subcommand directly to a completion file:

```shell {2}
zi ice as"completion"
zi snippet https://github.com/docker/cli/blob/master/contrib/completion/zsh/_docker
```

## Completion management {#completion-management}

ZI allows to disable and enable each completion in every plugin. Try installing a popular plugin that provides completions:

```shell {1}
zi ice blockf
zi light zsh-users/zsh-completions
```

The first command (the `blockf` ice) will block the traditional method of adding completions. ZI uses its method (based on symlinks instead of adding several directories to `$fpath`). ZI will automatically **install** completions of a newly downloaded plugin. To uninstall the completions and install them again, you would use:

```shell
zi cuninstall zsh-users/zsh-completions # uninstall
zi creinstall zsh-users/zsh-completions # install
```

### Listing Completions {#listing-completions}

:::note

`zini` is an alias that can be used in interactive sessions.

:::

To see what completions **all** plugins provide, in tabular formatting and with the name of each plugin, use:

```shell
zini clist
```

This command is specially adapted for plugins like `zsh-users/zsh-completions`, which provide many completions – listing will have `3` completions per line (so that a smaller number of terminal pages will be occupied) like this:

```shell
...
atach, bitcoin-cli, bower zsh-users/zsh-completions
bundle, caffeinate, cap zsh-users/zsh-completions
cask, cf, chattr zsh-users/zsh-completions
...
```

You can show more completions per line by providing an **argument** to `clist`, e.g. `zi clist 6`, will show:

```shell
...
bundle, caffeinate, cap, cask, cf, chattr zsh-users/zsh-completions
cheat, choc, cmake, coffee, column, composer zsh-users/zsh-completions
console, dad, debuild, dget, dhcpcd, diana zsh-users/zsh-completions
...
```

### Enabling and Disabling completions {#enabling-and-disabling-completions}

Completions can be disabled so that e.g. original Zsh completion will be used. The commands are very basic, they only need completion **name**:

```shell {1,3}
$ zi cdisable cmake
Disabled cmake completion belonging to zsh-users/zsh-completions
$ zi cenable cmake
Enabled cmake completion belonging to zsh-users/zsh-completions
```

That’s all on completions. There’s one more command, `zi csearch`, that will **search** all plugin directories for available completions, and show if they are installed:

This sums up complete control over completions.

## Subversion for subdirectories {#subversion-for-subdirectories}

In general, to use **subdirectories** of Github projects as snippets add `/trunk/{path-to-dir}` to URL, for example:

```shell
zi ice svn
zi snippet https://github.com/zsh-users/zsh-completions/trunk/src
```

:::tip

For Oh My Zsh and Prezto, the OMZ:: and PZT:: prefixes work without the need to add the `/trunk/` infix (however the path should point to a directory, not to a file):

:::

```shell
zi ice svn
zi snippet PZT::modules/docker
```

Snippets too have completions installed by default, like plugins.

## Turbo Mode (Zsh >= 5.3) {#turbo-mode-zsh--53}

The ice-mod `wait` allows the user to postpone the loading of a plugin to the moment when the processing of `.zshrc` is finished and the first prompt is being shown. It is like Windows – during startup, it shows desktop even though it still loads data in the background. This has drawbacks but is for sure better than a blank screen for 10 minutes. And here, in ZI, there are no drawbacks of this approach – no lags, freezes, etc. – the command line is fully usable while the plugins are being loaded, for any number of plugins.

:::info

Turbo will speed up Zsh startup by **50%–80%**. For example, instead of 200 ms, it'll be 40 ms.

:::

:::note

Zsh 5.3 or greater is required.

:::

To use this Turbo mode add `wait` ice to the target plugin in one of the following ways:

```shell
PS1="READY > "
zi ice wait'!0'
zi load halfo/lambda-mod-zsh-theme
```

This sets plugin `halfo/lambda-mod-zsh-theme` to be loaded `0` seconds after `zshrc`. It will fire up after c.a. 1 ms of showing the basic prompt `READY >`. You probably won't load the prompt in such a way, however, it is a good example in which Turbo can be directly observed.

The exclamation mark causes ZI to reset the prompt after loading the plugin – it is needed for themes. The same with Prezto prompts, with a longer delay:

```shell
zi ice svn silent wait'!1' atload'prompt smiley'
zi snippet PZT::modules/prompt
```

Using `zsh-users/zsh-autosuggestions` without any drawbacks:

```shell
zi ice wait lucid atload'_zsh_autosuggest_start'
zi light zsh-users/zsh-autosuggestions
```

Explanation:

Autosuggestions use the `precmd` hook, which is being called right after processing `zshrc` – `precmd` hooks are being called **right before displaying each prompt**.

Turbo with the empty `wait` ice will postpone the loading `1` ms after that, so `precmd` will not be called at that first prompt. This makes autosuggestions inactive at the first prompt.

**However** the given `atload` ice-mod fixes this, it calls the same function that `precmd` would, right after loading autosuggestions, resulting in the same behavior of the plugin.

The ice `lucid` causes the under-prompt message saying `Loaded zsh-users/zsh-autosuggestions` that normally appears for every Turbo-loaded plugin to not show.

### A Quick Glance At [The `for` syntax](../guides/syntax#the-for-syntax) {#a-quick-glance-at-the-for-syntax}

This introduction is based on the classic, two-command syntax (`zi ice …; zi load/light/snippet …`) of ZI. However, there's also available a recently added so-called _for-syntax_. It is the right moment to take a glance at it, by rewriting the above autosuggestions invocation using it:

```shell
zi wait lucid atload'_zsh_autosuggest_start' light-mode for zsh-users/zsh-autosuggestions
```

The syntax is a more concise one. The single command will work the same as the previous classic-syntax invocation. It also allows solving some typical problems when using ZI, like providing common/default ices for a set of plugins or sourcing multiple files with [`src''` ice](../guides/ice#src-pick-multisrc). For more information refer to the page dedicated to the syntax ([here](../guides/syntax#the-for-syntax)).

### Turbo Loading sophisticated prompts {#turbo-loading-sophisticated-prompts}

For some, mostly advanced themes the initialization of the prompt is being done in a `precmd`-hook, i.e.; in a function that's gets called before each prompt. The hook is installed by the [add-zsh-hook](https://z-shell.github.io/docs/zsh/Zsh-Plugin-Standard.html#azh) Zsh function by adding its name to the `$precmd_functions` array.

To make the prompt fully initialized after Turbo loading in the middle of the prompt (the same situation as with the `zsh-autosuggestions` plugin), the hook should be called from `atload''` ice.

First, find the name of the hook function by examining the `$precmd_functions` array. For example, for the `robobenklein/zinc` theme, they'll be two functions: `prompt_zinc_setup` and `prompt_zinc_precmd`:

```shell
root@sg > ~ > print $precmd_functions < ✔ < 22:21:33
_zsh_autosuggest_start prompt_zinc_setup prompt_zinc_precmd
```

Then, add them to the ice-list in the `atload''` ice:

```shell {2}
zi ice wait'!' lucid nocd \
  atload'!prompt_zinc_setup; prompt_zinc_precmd'
zi load robobenklein/zinc
```

The exclamation mark in `atload'!…'` is to track the functions allowing the plugin to be unloaded, as described [here](../guides/ice#atclone-atpull-atinit-atload). It might be useful for the multi-prompt setup described next.

## Automatic load/unload based on condition {#automatic-loadunload-based-on-condition}

Ices `load` and `unload` allow defining when you want plugins active or inactive. For example:

Load when in ~/tmp

```shell {1}
zi ice load'![[ $PWD = */tmp* ]]' unload'![[ $PWD != */tmp* ]]' \
  atload"!promptinit; prompt sprint3"
zi load psprint/zprompts
```

Load when NOT in ~/tmp

```shell {1}
zi ice load'![[ $PWD != */tmp* ]]' unload'![[ $PWD = */tmp* ]]'
zi load russjohnson/angry-fly-zsh
```

Two prompts, each active in different directories. This technique can be used to have plugin-sets, e.g. by defining parameter `$PLUGINS` with possible values like `cpp`, `web`, `admin` and by setting `load` / `unload` conditions to activate different plugins on `cpp`, on `web`, etc.

:::note

- The difference with `wait` is that `load` / `unload` are constantly active, not only till the first activation.

- Note that for the unloading of a plugin to work the plugin needs to be loaded with tracking (so `zi load …`, not `zi light …`). Tracking causes a slight slowdown, however, this doesn’t influence Zsh startup time when using Turbo mode.

:::

:::tip

See: [multiple prompts](../guides/customization#multiple-prompts) for more information. It contains more real-world examples of a multi-prompt setup, which is being close to what the author uses in his setup.

:::
