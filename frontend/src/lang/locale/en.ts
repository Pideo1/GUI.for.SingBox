export default {
  common: {
    grid: 'Grid',
    list: 'List',
    add: 'Add',
    added: 'Added',
    more: 'More',
    edit: 'Edit',
    clear: 'Clear',
    update: 'Update',
    delete: 'Delete',
    cancel: 'Cancel',
    save: 'Save',
    nextStep: 'Next',
    prevStep: 'Back',
    disabled: 'Disabled',
    enabled: 'Enabled',
    preview: 'Preview',
    warning: 'Warning',
    disable: 'Disable',
    enable: 'Enable',
    use: 'Use',
    none: 'none',
    close: 'Close',
    reset: 'Reset',
    pause: 'Pause',
    resume: 'Resume',
    details: 'Details',
    updateAll: 'Update All',
    updateTime: 'Update Time',
    keywords: 'Keywords',
    success: 'Success',
    copy: 'Copy',
    copied: 'Copied',
    auto: 'Auto',
    import: 'Import',
    install: 'Install',
    uninstall: 'Uninstall',
    run: 'Run',
    refresh: 'Refresh',
    confirm: 'OK',
    selectAll: 'Select All',
    http: 'Remote',
    file: 'Local',
    openFile: 'Open File',
    develop: 'Develop',
    canceled: 'Canceled',
    downloading: 'Downloading...'
  },
  kernel: {
    rule: 'Rule',
    global: 'Global',
    direct: 'Direct',
    ruleDesc: 'Route traffic based on rules',
    globalDesc: 'Only follow the Global group',
    directDesc: 'Directly connect all traffic',
    log: {
      disabled: 'Disabled',
      level: 'level',
      output: 'output',
      timestamp: 'timestamp',
      trace: 'trace',
      debug: 'debug',
      info: 'info',
      warn: 'warn',
      error: 'error',
      fatal: 'fatal',
      panic: 'panic'
    },
    clash_api: {
      external_controller: 'External Controller',
      external_ui: 'External UI',
      external_ui_download_url: 'Web UI Download URL',
      external_ui_download_detour: 'Web UI Download Detour',
      secret: 'RESTful API Secret',
      default_mode: 'Mode',
      access_control_allow_origin: 'CORS allowed origins',
      access_control_allow_private_network: 'Allow access from private network'
    },
    cache_file: {
      enabled: 'Enabled',
      path: 'Path to the cache file',
      cache_id: 'Identifier in the cache file',
      store_fakeip: 'Store Fake-IP',
      store_rdrc: 'Store Rejected DNS Response',
      rdrc_timeout: 'Timeout of rejected DNS response cache'
    },
    inbounds: {
      enable: 'Enable',
      tag: 'Tag',
      users: 'Http/Socks users',
      listen: {
        listen: 'Listen',
        listen_port: 'Poret',
        tcp_fast_open: 'TCP Fast Open',
        tcp_multi_path: 'TCP Multi Path',
        udp_fragment: 'UDP Fragmentation'
      },
      tun: {
        interface_name: 'Interface Name',
        address: 'IPv4 & IPv6 Prefix',
        mtu: 'MTU',
        auto_route: 'Auto Route',
        strict_route: 'Strict Route',
        route_address: 'Route Address',
        endpoint_independent_nat: 'Endpoint Independent NAT',
        stack: 'Stack',
        system: 'System',
        gvisor: 'gVisor',
        mixed: 'Mixed'
      }
    },
    outbounds: {
      tag: 'Tag',
      type: 'Type',
      url: 'URL',
      interval: 'Interval(min)',
      tolerance: 'Tolerance(ms)',
      interrupt_exist_connections: 'Interrupt Exist Connections',
      direct: 'Direct',
      directDesc: 'No settings',
      selector: 'Selector',
      urltest: 'URLTest',
      notFound: 'Some outbound tags or proxies are missing; please clean them up.',
      needToAdd: 'At least reference one outbound tag or proxy.',
      refsSubscription: 'Reference subscription',
      refsOutbound: 'Reference outbound',
      sort: 'Viwe and Sort',
      refs: 'Reference subscription & outbound',
      noSubs: 'The subscription list is empty.',
      empty: 'No available proxies under this subscription.'
    },
    route: {
      tab: {
        common: 'Common',
        rules: 'Rules',
        rule_set: 'Rule-Set'
      },
      auto_detect_interface: 'Auto Detect Interface',
      default_interface: 'Default Interface',
      final: 'Final Outbound Tag',
      rule_set: {
        type: {
          name: 'Name',
          inline: 'Inline',
          local: 'Local',
          remote: 'Remote'
        },
        tag: 'Tag',
        format: {
          name: 'Format',
          binary: 'Binary',
          source: 'Source'
        },
        url: 'URL',
        download_detour: 'Download Detour',
        update_interval: 'Update Interval',
        path: 'Path',
        notFound: 'The rule set has been lost.',
        empty: 'The rule set list is empty.'
      },
      rules: {
        type: 'Type',
        action: {
          name: 'Action',
          route: 'Route',
          'route-options': 'Route-Options',
          reject: 'Reject',
          'hijack-dns': 'Hijack-DNS',
          sniff: 'Sniff',
          resolve: 'Resolve DNS'
        },
        outbound: 'Outbound Tag',
        sniffer: {
          name: 'Sniffer',
          http: 'http',
          tls: 'tls',
          quic: 'quic',
          dns: 'dns',
          ssh: 'ssh',
          rdp: 'rdp'
        },
        server: 'DNS Server',
        payload: 'Payload',
        notFound: 'Outbound tag is missing.'
      }
    },
    rules: {
      type: {
        name: 'Type',
        inbound: 'inbound',
        network: 'network',
        protocol: 'protocol',
        domain: 'domain',
        domain_suffix: 'domain_suffix',
        domain_keyword: 'domain_keyword',
        domain_regex: 'domain_regex',
        source_ip_cidr: 'source_ip_cidr',
        ip_cidr: 'ip_cidr',
        ip_is_private: 'ip_is_private',
        source_port: 'source_port',
        source_port_range: 'source_port_range',
        port: 'port',
        port_range: 'port_range',
        process_name: 'process_name',
        process_path: 'process_path',
        process_path_regex: 'process_path_regex',
        clash_mode: 'clash_mode',
        rule_set: 'rule_set',
        logical: 'logical',
        outbound: 'outbound'
      }
    },
    strategy: {
      name: 'Strategy',
      default: 'Default',
      prefer_ipv4: 'Prefer IPV4',
      prefer_ipv6: 'Prefer IPV6',
      ipv4_only: 'IPV4 Only',
      ipv6_only: 'IPV6 Only'
    },
    dns: {
      tab: {
        common: 'Common',
        servers: 'Servers',
        rules: 'Rules'
      },
      tag: 'Tag',
      address: 'Address',
      client_subnet: 'Client Subnet',
      address_resolver: 'Address Resolver',
      detour: 'Detour',
      disable_cache: 'Disable Cache',
      disable_expire: 'Disable Expire',
      independent_cache: 'Independent Cache',
      final: 'Final DNS',
      strategy: 'Strategy',
      fakeip: {
        name: 'Fake-IP',
        inet4_range: 'Fake-IP Range(IPv4)',
        inet6_range: 'Fake-IP Range(IPv6)'
      },
      rules: {
        type: 'Type',
        payload: 'Payload',
        action: 'Action',
        server: 'Server'
      }
    }
  },
  router: {
    overview: 'OverView',
    subscriptions: 'Subscriptions',
    rulesets: 'Rulesets',
    plugins: 'Plugins',
    settings: 'Settings',
    debug: 'Debug',
    components: 'Components',
    about: 'About',
    profiles: 'Profiles',
    kernel: 'Kernel',
    scheduledtasks: 'Tasks'
  },
  home: {
    mode: 'Proxy Mode',
    global: 'Global',
    rule: 'Rule',
    direct: 'Direct',
    quickStart: 'Quick Start',
    noProfile: 'Welcome to the {0}, click the button to get started.',
    initSuccessful: 'Initialization successful',
    initFailed: 'Failed to update the subscription, you need to manually update the subscription',
    overview: {
      expandAll: 'Expand All',
      collapseAll: 'Collapse All',
      refresh: 'Refresh',
      delayTest: 'Delay Test',
      stop: 'Stop Kernel',
      restart: 'Restart Kernel',
      viewlog: 'view log',
      start: 'Click to Start',
      noLogs: 'Log is empty',
      systemProxy: 'System Proxy',
      tunMode: 'TUN Mode',
      traffic: 'Traffic',
      realtimeTraffic: 'Real-time Traffic',
      totalTraffic: 'Total Traffic',
      connections: 'Connections',
      memory: 'Memory',
      transmit: 'Transmit',
      receive: 'Receive',
      settings: 'Kernel Settings',
      settingsTips: 'Effective temporarily, for persistence, please modify the `profile` settings.',
      updateGEO: 'Update GEO',
      needPort: 'Please set the proxy port first'
    },
    controller: {
      name: 'Controller',
      autoClose: 'Auto-close',
      unAvailable: 'Show UnAvailable',
      cardMode: 'Card Mode',
      sortBy: 'Sort By Delay',
      delay: 'Delay test URL',
      delayUrl: 'Please enter the delayed test URL'
    },
    connections: {
      type: 'Type',
      process: 'Process',
      processPath: 'Process Path',
      sniffHost: 'Sniff Host',
      sourceIP: 'Source',
      remoteDestination: 'Destination',
      host: 'Host',
      inbound: 'Inbound',
      rule: 'Rule',
      chains: 'Chains',
      upload: 'Upload',
      download: 'Download',
      uploadSpeed: 'UL Speed',
      downSpeed: 'DL Speed',
      time: 'Time',
      close: 'Close',
      addToDirect: 'Add To DIRECT',
      addToProxy: 'Add To PROXY',
      addToReject: 'Add To REJECT',
      active: 'Active',
      closed: 'Closed',
      closeAll: 'Close all connections',
      sort: 'Sorting and Setting Visibility',
      details: 'Connection Details'
    }
  },
  subscribe: {
    manual: 'MANUAL',
    name: 'Name',
    url: 'Remote Url',
    localPath: 'Local Path',
    website: 'Website',
    path: 'Save Path',
    include: 'Include Keywords',
    exclude: 'Exclude Keywords',
    includeProtocol: 'Include Protocol',
    excludeProtocol: 'Exclude Protocol',
    proxyPrefix: 'Proxy Prefix',
    updating: 'Updating',
    useragent: 'User-Agent',
    resetUserAgent: 'Reset User-Agent',
    inSecure: 'InsecureSkipVerify',
    healthCheck: {
      name: 'Health Check',
      interval: 'interval(s)',
      url: 'url'
    }
  },
  subscribes: {
    download: 'Download',
    upload: 'Upload',
    total: 'Total',
    expire: 'Expire',
    subtype: 'Subscription Type',
    website: 'Website',
    empty: 'The subscription list is empty. Please{action}a subscription first.',
    enterLink: 'Enter subscription link',
    proxyCount: 'Proxy Count',
    editProxies: 'Edit Proxies',
    editSourceFile: 'Edit Proxies(Source)',
    copySub: 'Copy Link',
    proxies: {
      type: 'Protocol',
      name: 'Name',
      add: 'Add Proxy'
    }
  },
  profile: {
    name: 'Name',
    generalSettings: 'General Settings',
    advancedSettings: 'Advanced Settings',
    step: {
      name: 'Name',
      general: 'General',
      inbounds: 'Inbounds',
      outbounds: 'Outbounds',
      route: 'Route',
      dns: 'DNS',
      'mixin-script': 'Mixin & Script'
    },
    proxies: 'Reference proxies',
    use: 'Reference subscriptions',
    noSubs: 'There are no available subscriptions.',
    group: 'Group Details',
    rule: 'Rule Details',
    auto: 'This configuration is managed by subscription and will be overwritten when the subscription is updated!\nIf you want to modify this profile, please use the plugin system.',
    mixinSettings: {
      name: 'Mixin',
      priority: 'Priority',
      mixin: 'Mixin',
      gui: 'GUI'
    },
    scriptSettings: {
      name: 'Script'
    }
  },
  profiles: {
    shouldStop: 'Unable to delete, this profile is in use.',
    empty: 'The profiles list is empty, Please{action}a profile first.',
    copytoClipboard: 'Generate config to clipboard',
    generateAndView: 'Generate and View',
    copy: 'Copy and Paste',
    start: 'Start/Restart with this Profile',
    proxyGroups: 'Proxy Groups',
    rules: 'Rules'
  },
  ruleset: {
    manual: 'MANUAL',
    format: {
      name: 'Format',
      source: 'Source',
      binary: 'Binary'
    },
    rulesetType: 'Ruleset Type',
    name: 'Name',
    url: 'Remote Url',
    path: 'Save Path',
    interval: 'Interval',
    updating: 'Updating'
  },
  rulesets: {
    hub: 'Ruleset-Hub',
    total: 'Number of rule-sets',
    noDesc: 'No description',
    updating: 'Updating',
    fetching: 'fetching...',
    empty: 'The ruleset list is empty. Please{action}or import from the{import}first.',
    rulesetCount: 'Ruleset Count',
    editRuleset: 'Edit Rules',
    selectRuleType: 'Select Rule Type'
  },
  plugin: {
    trigger: 'Trigger',
    'on::manual': 'on::manual',
    'on::startup': 'on::startup',
    'on::shutdown': 'on::shutdown',
    'on::generate': 'on::generate',
    'on::subscribe': 'on::subscribe',
    'on::ready': 'on::ready',
    'on::task': 'on::task',
    'on::install': 'on::install',
    'on::uninstall': 'on::uninstall',
    'on::configure': 'on::configure',
    name: 'Name',
    description: 'Description',
    url: 'Remote Url',
    install: 'Installation required',
    installed: 'Installed',
    path: 'Save Path',
    type: 'Type',
    menus: 'Menus',
    configuration: ' Configuration',
    menuKey: 'Menu Title',
    menuValue: 'Trigger function name',
    selectComponent: 'Select a component',
    confName: 'Name',
    confDescription: 'Description',
    confKey: 'Key',
    confDefault: 'Default',
    options: 'Options',
    restore: 'Reset to default'
  },
  plugins: {
    updating: 'Updating',
    empty: 'The plugin list is empty. Please{action}or import from the{import}first.',
    source: 'Source',
    reload: 'Reload',
    configuration: 'Configure',
    hub: 'Plugin-Hub',
    update: 'Update List',
    updateSuccess: 'updated successfully',
    total: 'Number of plug-ins',
    removeConfiguration: 'Do you want to remove the plugin configuration?',
    testRun: 'TestRun'
  },
  scheduledtask: {
    name: 'Name',
    type: 'Type',
    script: 'Script',
    subscriptions: 'Subscriptions',
    rulesets: 'Rulesets',
    plugins: 'Plugins',
    cron: 'Cron',
    notification: 'Task Completed Notification',
    cronTips: 'Seconds Minutes Hours "Day of month" Month "Day of week"',
    lastTime: 'Last Time',
    'update::subscription': 'update::subscription',
    'update::ruleset': 'update::ruleset',
    'update::plugin': 'update::plugin',
    'run::plugin': 'run::plugin',
    'run::script': 'run::script'
  },
  scheduledtasks: {
    logs: 'Logs',
    name: 'Plugin',
    duration: 'Duration',
    startTime: 'Start Time',
    endTime: 'End Time',
    time: 'Time',
    result: 'Result',
    empty: 'The scheduled task list is empty. Please{action}a scheduled task first.',
    run: 'Run now',
    log: 'View log'
  },
  settings: {
    general: 'General',
    theme: {
      name: 'Theme',
      light: 'Light Mode',
      dark: 'Dark Mode',
      auto: 'System'
    },
    color: {
      name: 'Color',
      default: 'Default',
      orange: 'Orange',
      pink: 'Pink',
      red: 'Red',
      skyblue: 'Skyblue',
      green: 'Green'
    },
    fontFamily: 'Font-Family',
    resetFont: 'Reset Font-Family',
    appFolder: {
      name: 'App Folder',
      open: 'Open application folder'
    },
    kernelCache: {
      name: 'Kernel Cache',
      clear: 'Clear kernel cache'
    },
    lang: {
      name: 'Language',
      zh: '简体中文',
      en: 'English'
    },
    pages: {
      name: 'Page visibility'
    },
    windowState: {
      normal: 'Normal window',
      maximised: 'Maximised',
      minimised: 'Minimize window',
      fullscreen: 'Fullscreen'
    },
    webviewGpuPolicy: {
      name: 'Webview Gpu Policy',
      always: 'Always',
      onDemand: 'OnDemand',
      never: 'Never'
    },
    needRestart: 'Restart Required',
    needAdmin: 'Admin required',
    exitOnClose: 'Exit APP On Window Close',
    closeKernelOnExit: 'Close Kernel When APP Exits',
    autoSetSystemProxy: 'Auto Set / Clear System Proxy',
    autoStartKernel: 'Auto Start Kernel',
    admin: 'Run As Admin',
    addToMenu: 'Add Plugin To Menu',
    multipleInstance: 'Allow Multiple APP Instances',
    rollingRelease: 'Enable Rolling Release',
    startup: {
      name: 'Startup on boot',
      delay: 'Delay(s)'
    },
    kernel: {
      name: 'sing-box',
      version: 'Switch version',
      stable: 'Stable version',
      alpha: 'Alpha version',
      grant: 'Grant Privileges'
    },
    userAgent: {
      name: 'User-Agent',
      reset: 'Reset User-Agent'
    },
    githubapi: {
      name: 'Authenticating to the REST API',
      tips: 'have a higher rate limit'
    }
  },
  about: {
    new: 'New',
    restart: 'Restart APP',
    noDownloadLink: 'No download link found',
    updateSuccessfulRestart: 'Update completed, please restart the App',
    updateSuccessfulReplace: 'Download completed, please manually replace the App',
    updateSuccessful: 'Update completed',
    newVersion: 'New version found',
    latestVersion: 'Already the latest version'
  },
  titlebar: {
    resetSize: 'Reset Window',
    reload: 'Reload Window',
    restart: 'Restart App',
    exitApp: 'Exit App',
    waiting: 'Waiting for the program to exit...',
    timeout: 'Exit timed out. Force exit？\n\nReason: Plugin exit timed out.'
  },
  format: {
    seconds: 'Seconds',
    minutes: 'Minutes',
    hours: 'Hours',
    days: 'Days',
    months: 'Months',
    years: 'Years',
    second: 'Second',
    minute: 'Minute',
    hour: 'Hour',
    day: 'Day',
    month: 'Month',
    year: 'Year',
    ago: 'Ago',
    later: 'Later'
  },
  outbound: {
    select: '🚀 Select',
    urltest: '🎈 Auto',
    direct: '🎯 Direct',
    block: '🛑 Block',
    fallback: '🐟 Fallback'
  },
  tray: {
    showMainWindow: 'Show Main Window',
    restart: 'Restart',
    restartTip: 'Restart App',
    exit: 'Exit',
    exitTip: 'Exit App',
    proxyGroup: 'Proxy Group',
    setSystemProxy: 'Set System Proxy',
    clearSystemProxy: 'Clear System Proxy',
    tun: 'Tun Mode',
    enableTunMode: 'Enable Tun Mode',
    disableTunMode: 'Disable Tun Mode',
    kernel: 'Kernel',
    proxy: 'System Proxy',
    startKernel: 'Start Kernel',
    stopKernel: 'Stop Kernel',
    restartKernel: 'Restart Kernel',
    plugins: 'Plugins'
  },
  commands: {
    noMatching: 'No matching commands'
  }
}
