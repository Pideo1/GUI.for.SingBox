export enum LogLevel {
  Trace = 'trace',
  Debug = 'debug',
  Info = 'info',
  Warn = 'warn',
  Error = 'error',
  Fatal = 'fatal',
  Panic = 'panic'
}

export enum ClashMode {
  Global = 'global',
  Rule = 'rule',
  Direct = 'direct'
}

export enum Inbound {
  Mixed = 'mixed',
  Socks = 'socks',
  Http = 'http',
  Tun = 'tun'
}

export enum Outbound {
  Direct = 'direct',
  Selector = 'selector',
  Urltest = 'urltest'
}

export enum TunStackEnum {
  System = 'system',
  GVisor = 'gVisor',
  Mixed = 'mixed'
}

export enum RulesetType {
  Inline = 'inline',
  Local = 'local',
  Remote = 'remote'
}

export enum RulesetFormat {
  Source = 'source',
  Binary = 'binary'
}

export enum RuleType {
  Inbound = 'inbound',
  Network = 'network',
  Protocol = 'protocol',
  Domain = 'domain',
  DomainSuffix = 'domain_suffix',
  DomainKeyword = 'domain_keyword',
  DomainRegex = 'domain_regex',
  SourceIPCidr = 'source_ip_cidr',
  IPCidr = 'ip_cidr',
  IpIsPrivate = 'ip_is_private',
  SourcePort = 'source_port',
  SourcePortRange = 'source_port_range',
  Port = 'port',
  PortRange = 'port_range',
  ProcessName = 'process_name',
  ProcessPath = 'process_path',
  ProcessPathRegex = 'process_path_regex',
  ClashMode = 'clash_mode',
  RuleSet = 'rule_set',
  Logical = 'logical',
  // dns rule type
  Outbound = 'outbound'
}

export enum Strategy {
  Default = 'default',
  PreferIPv4 = 'prefer_ipv4',
  PreferIPv6 = 'prefer_ipv6',
  IPv4Only = 'ipv4_only',
  IPv6Only = 'ipv6_only'
}

export enum RuleAction {
  Route = 'route',
  RouteOptions = 'route-options',
  Reject = 'reject',
  HijackDNS = 'hijack-dns',
  Sniff = 'sniff',
  Resolve = 'resolve'
}

export enum Sniffer {
  Http = 'http',
  Tls = 'tls',
  Quic = 'quic',
  Dns = 'dns',
  Ssh = 'ssh',
  Rdp = 'rdp'
}
